/**
 * 消费者
 */

import publish from "../publish";
import { NotSupportedException } from "../errors";
import { IJob } from "../common-types";
const queues = [
    {
        provider: "medium"
    }
];
export function consumer() {
    queues.forEach(async queue => {
        const job = queue;
        await doJob(job);
    });
}

function doJob(job: IJob) {
    if (job.provider && publish[job.provider]) {
        // type
        return publish[job.provider](job);
    } else {
        // 没有处理的方法
        throw new NotSupportedException();
    }
}
