import { IPublishResult, IJob } from "../common-types";
import Debug from "debug";
const debug = Debug("medium-job");

export default function(_: IJob): Promise<IPublishResult> {
    debug("do job");
    return new Promise(resolve => {
        return resolve({
            provider: "medium",
            id: "1234456",
            url:
                "https://medium.com/s/story/u-s-immigration-policy-is-held-together-with-band-aids-931019797b9f"
        });
    });
}
