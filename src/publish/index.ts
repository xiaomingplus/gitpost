import medium from "./medium";
import { IJob, IPublishResult } from "../common-types";
interface IPublish {
    [key: string]: (_: IJob) => Promise<IPublishResult>;
}
const publishTools: IPublish = {
    medium
};
export default publishTools;
