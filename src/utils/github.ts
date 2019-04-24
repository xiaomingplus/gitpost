import { IGithubHookPayload } from "../common-types/github";
interface IModified {
    type: string;
    path: string;
    url: string;
}
interface IModifiedMap {
    [key: string]: IModified[];
}
export function getModifiedFiles(payload: IGithubHookPayload) {
    const { commits } = payload;
    // modifiedFiles里是按照时间正序排列的文件操作集合
    const modifiedFiles: IModified[] = [];
    const fullName = payload.repository.full_name;

    commits.forEach(element => {
        // https://github.com/xiaomingplus/test/commit/48575ea26fd155214159afff69a73e7aaebe4b53
        const commitId = element.id;
        element.added.forEach(path => {
            modifiedFiles.push({
                type: "added",
                path,
                url: `https://raw.githubusercontent.com/${fullName}/${commitId}/${path}`
            });
        });
        element.modified.forEach(path => {
            modifiedFiles.push({
                type: "modified",
                path,
                url: `https://raw.githubusercontent.com/${fullName}/${commitId}/${path}`
            });
        });
        element.removed.forEach(path => {
            modifiedFiles.push({
                type: "removed",
                path,
                url: `https://raw.githubusercontent.com/${fullName}/${commitId}/${path}`
            });
        });
    });

    // 需要有个合并策略,多个提交里对同一个文件的操作，需要智能合并成一个最终的操作

    // 如果一个文件起始状态是added，最终被removed，那么干掉这一项，当无事发生
    // 如果一个文件起始状态是 modified,最终变成 removed,那么合并为一个removed的动作
    // 如果一个文件的起始状态是removed,最终也是removed的，那么合并为removed的动作

    // 如果一个文件起始状态是added,最终还在，那对于这个文件的操作就是一个added的操作
    // 如果一个文件起始状态是modified，最终这个文件也还在，那这就是一个modified的操作
    // 如果一个文件起始状态是removed,最终还在，那么合并一个modified的动作

    // 如果一个文件在这次push事件中只被操作了一次的话，那么该次的操作即为最终操作

    const multiActionsFilesMap: IModifiedMap = {}; // 多次操作的文件集合

    modifiedFiles.reduce((previousValue, currentValue) => {
        if (previousValue[currentValue.path]) {
            previousValue[currentValue.path].push(currentValue);
        } else {
            previousValue[currentValue.path] = [currentValue];
        }
        return previousValue;
    }, multiActionsFilesMap);

    const keys = Object.keys(multiActionsFilesMap);
    const finalSets: IModified[] = [];
    keys.forEach(key => {
        // 操作集合
        const currentModifiedSets = multiActionsFilesMap[key];
        if (currentModifiedSets.length > 1) {
            const lastIndex = currentModifiedSets.length - 1;
            if (currentModifiedSets[lastIndex].type === "removed") {
                // 最终是removed,查看一开始的状态
                if (!(currentModifiedSets[0].type === "added")) {
                    // 只要不是added的
                    currentModifiedSets[lastIndex].type = "removed";
                    finalSets.push(currentModifiedSets[lastIndex]);
                }
            } else {
                // 文件还在
                if (currentModifiedSets[0].type === "added") {
                    // 只要不是added的
                    currentModifiedSets[lastIndex].type = "added";
                    finalSets.push(currentModifiedSets[lastIndex]);
                } else {
                    currentModifiedSets[lastIndex].type = "modified";
                    finalSets.push(currentModifiedSets[lastIndex]);
                }
            }
        } else if (currentModifiedSets.length === 1) {
            finalSets.push(currentModifiedSets[0]);
        }
    });
    return finalSets;
}
