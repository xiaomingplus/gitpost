import { getModifiedFiles } from "../github";
const payload = {
    ref: "refs/heads/master",
    before: "6215b49951a01b3fc9c1c3db37f34ef486ad0252",
    after: "b1bac057dcf9a7de3785c50da1738ed99f5c83d4",
    created: false,
    deleted: false,
    forced: false,
    base_ref: null,
    compare:
        "https://github.com/xiaomingplus/test/compare/6215b49951a0...b1bac057dcf9",
    commits: [
        {
            id: "48575ea26fd155214159afff69a73e7aaebe4b53",
            tree_id: "c82821520644ee143c89fdcb5e28108c1095f197",
            distinct: true,
            message: "test",
            timestamp: "2019-04-24T16:51:32+08:00",
            url:
                "https://github.com/xiaomingplus/test/commit/48575ea26fd155214159afff69a73e7aaebe4b53",
            author: {
                name: "guobaoyang",
                email: "guobaoyang@tencent.com",
                username: "xiaomingplus"
            },
            committer: {
                name: "guobaoyang",
                email: "guobaoyang@tencent.com",
                username: "xiaomingplus"
            },
            added: ["source/_posts/Hello.md", "source/_posts/Test.md"],
            removed: [],
            modified: []
        },
        {
            id: "3e196ba059be9f8dc3211fa8233d01c447f9ca80",
            tree_id: "86d1d81725e4f2880d2e09315aaf0a74f9caa882",
            distinct: true,
            message: "2times",
            timestamp: "2019-04-24T16:52:27+08:00",
            url:
                "https://github.com/xiaomingplus/test/commit/3e196ba059be9f8dc3211fa8233d01c447f9ca80",
            author: {
                name: "guobaoyang",
                email: "guobaoyang@tencent.com",
                username: "xiaomingplus"
            },
            committer: {
                name: "guobaoyang",
                email: "guobaoyang@tencent.com",
                username: "xiaomingplus"
            },
            added: [],
            removed: ["source/_posts/Test.md"],
            modified: ["source/_posts/Hello.md"]
        },
        {
            id: "b1bac057dcf9a7de3785c50da1738ed99f5c83d4",
            tree_id: "62d85cedea7c45f3520e193da417613141fdb56a",
            distinct: true,
            message: "3times",
            timestamp: "2019-04-24T16:53:04+08:00",
            url:
                "https://github.com/xiaomingplus/test/commit/b1bac057dcf9a7de3785c50da1738ed99f5c83d4",
            author: {
                name: "guobaoyang",
                email: "guobaoyang@tencent.com",
                username: "xiaomingplus"
            },
            committer: {
                name: "guobaoyang",
                email: "guobaoyang@tencent.com",
                username: "xiaomingplus"
            },
            added: ["source/_posts/Test.md"],
            removed: [],
            modified: ["source/_posts/Hello.md"]
        }
    ],
    head_commit: {
        id: "b1bac057dcf9a7de3785c50da1738ed99f5c83d4",
        tree_id: "62d85cedea7c45f3520e193da417613141fdb56a",
        distinct: true,
        message: "3times",
        timestamp: "2019-04-24T16:53:04+08:00",
        url:
            "https://github.com/xiaomingplus/test/commit/b1bac057dcf9a7de3785c50da1738ed99f5c83d4",
        author: {
            name: "guobaoyang",
            email: "guobaoyang@tencent.com",
            username: "xiaomingplus"
        },
        committer: {
            name: "guobaoyang",
            email: "guobaoyang@tencent.com",
            username: "xiaomingplus"
        },
        added: ["source/_posts/Test.md"],
        removed: [],
        modified: []
    },
    repository: {
        id: 59345069,
        node_id: "MDEwOlJlcG9zaXRvcnk1OTM0NTA2OQ==",
        name: "test",
        full_name: "xiaomingplus/test",
        private: false,
        owner: {
            name: "xiaomingplus",
            email: "returnyang@gmail.com",
            login: "xiaomingplus",
            id: 7547308,
            node_id: "MDQ6VXNlcjc1NDczMDg=",
            avatar_url: "https://avatars1.githubusercontent.com/u/7547308?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/xiaomingplus",
            html_url: "https://github.com/xiaomingplus",
            followers_url:
                "https://api.github.com/users/xiaomingplus/followers",
            following_url:
                "https://api.github.com/users/xiaomingplus/following{/other_user}",
            gists_url:
                "https://api.github.com/users/xiaomingplus/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/xiaomingplus/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/xiaomingplus/subscriptions",
            organizations_url: "https://api.github.com/users/xiaomingplus/orgs",
            repos_url: "https://api.github.com/users/xiaomingplus/repos",
            events_url:
                "https://api.github.com/users/xiaomingplus/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/xiaomingplus/received_events",
            type: "User",
            site_admin: false
        },
        html_url: "https://github.com/xiaomingplus/test",
        description: "test",
        fork: false,
        url: "https://github.com/xiaomingplus/test",
        forks_url: "https://api.github.com/repos/xiaomingplus/test/forks",
        keys_url:
            "https://api.github.com/repos/xiaomingplus/test/keys{/key_id}",
        collaborators_url:
            "https://api.github.com/repos/xiaomingplus/test/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/xiaomingplus/test/teams",
        hooks_url: "https://api.github.com/repos/xiaomingplus/test/hooks",
        issue_events_url:
            "https://api.github.com/repos/xiaomingplus/test/issues/events{/number}",
        events_url: "https://api.github.com/repos/xiaomingplus/test/events",
        assignees_url:
            "https://api.github.com/repos/xiaomingplus/test/assignees{/user}",
        branches_url:
            "https://api.github.com/repos/xiaomingplus/test/branches{/branch}",
        tags_url: "https://api.github.com/repos/xiaomingplus/test/tags",
        blobs_url:
            "https://api.github.com/repos/xiaomingplus/test/git/blobs{/sha}",
        git_tags_url:
            "https://api.github.com/repos/xiaomingplus/test/git/tags{/sha}",
        git_refs_url:
            "https://api.github.com/repos/xiaomingplus/test/git/refs{/sha}",
        trees_url:
            "https://api.github.com/repos/xiaomingplus/test/git/trees{/sha}",
        statuses_url:
            "https://api.github.com/repos/xiaomingplus/test/statuses/{sha}",
        languages_url:
            "https://api.github.com/repos/xiaomingplus/test/languages",
        stargazers_url:
            "https://api.github.com/repos/xiaomingplus/test/stargazers",
        contributors_url:
            "https://api.github.com/repos/xiaomingplus/test/contributors",
        subscribers_url:
            "https://api.github.com/repos/xiaomingplus/test/subscribers",
        subscription_url:
            "https://api.github.com/repos/xiaomingplus/test/subscription",
        commits_url:
            "https://api.github.com/repos/xiaomingplus/test/commits{/sha}",
        git_commits_url:
            "https://api.github.com/repos/xiaomingplus/test/git/commits{/sha}",
        comments_url:
            "https://api.github.com/repos/xiaomingplus/test/comments{/number}",
        issue_comment_url:
            "https://api.github.com/repos/xiaomingplus/test/issues/comments{/number}",
        contents_url:
            "https://api.github.com/repos/xiaomingplus/test/contents/{+path}",
        compare_url:
            "https://api.github.com/repos/xiaomingplus/test/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/xiaomingplus/test/merges",
        archive_url:
            "https://api.github.com/repos/xiaomingplus/test/{archive_format}{/ref}",
        downloads_url:
            "https://api.github.com/repos/xiaomingplus/test/downloads",
        issues_url:
            "https://api.github.com/repos/xiaomingplus/test/issues{/number}",
        pulls_url:
            "https://api.github.com/repos/xiaomingplus/test/pulls{/number}",
        milestones_url:
            "https://api.github.com/repos/xiaomingplus/test/milestones{/number}",
        notifications_url:
            "https://api.github.com/repos/xiaomingplus/test/notifications{?since,all,participating}",
        labels_url:
            "https://api.github.com/repos/xiaomingplus/test/labels{/name}",
        releases_url:
            "https://api.github.com/repos/xiaomingplus/test/releases{/id}",
        deployments_url:
            "https://api.github.com/repos/xiaomingplus/test/deployments",
        created_at: 1463811421,
        updated_at: "2019-04-24T08:02:44Z",
        pushed_at: 1556095991,
        git_url: "git://github.com/xiaomingplus/test.git",
        ssh_url: "git@github.com:xiaomingplus/test.git",
        clone_url: "https://github.com/xiaomingplus/test.git",
        svn_url: "https://github.com/xiaomingplus/test",
        homepage: null,
        size: 13,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
        stargazers: 0,
        master_branch: "master"
    },
    pusher: { name: "xiaomingplus", email: "returnyang@gmail.com" },
    sender: {
        login: "xiaomingplus",
        id: 7547308,
        node_id: "MDQ6VXNlcjc1NDczMDg=",
        avatar_url: "https://avatars1.githubusercontent.com/u/7547308?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/xiaomingplus",
        html_url: "https://github.com/xiaomingplus",
        followers_url: "https://api.github.com/users/xiaomingplus/followers",
        following_url:
            "https://api.github.com/users/xiaomingplus/following{/other_user}",
        gists_url: "https://api.github.com/users/xiaomingplus/gists{/gist_id}",
        starred_url:
            "https://api.github.com/users/xiaomingplus/starred{/owner}{/repo}",
        subscriptions_url:
            "https://api.github.com/users/xiaomingplus/subscriptions",
        organizations_url: "https://api.github.com/users/xiaomingplus/orgs",
        repos_url: "https://api.github.com/users/xiaomingplus/repos",
        events_url:
            "https://api.github.com/users/xiaomingplus/events{/privacy}",
        received_events_url:
            "https://api.github.com/users/xiaomingplus/received_events",
        type: "User",
        site_admin: false
    }
};

test("getModifiedFiles", () => {
    expect(getModifiedFiles(payload)).toEqual([
        {
            path: "source/_posts/Hello.md",
            type: "added",
            url:
                "https://raw.githubusercontent.com/xiaomingplus/test/b1bac057dcf9a7de3785c50da1738ed99f5c83d4/source/_posts/Hello.md"
        },
        {
            path: "source/_posts/Test.md",
            type: "added",
            url:
                "https://raw.githubusercontent.com/xiaomingplus/test/b1bac057dcf9a7de3785c50da1738ed99f5c83d4/source/_posts/Test.md"
        }
    ]);
});
