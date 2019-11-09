import React from "react";
import Utils from "../../common/Utils";
import ApplyModal from "./ApplyModal";
import ReceiveModal from "./ReceiveModal";
import Successmodal from "./Successmodal";

let ApplyUtils = (() => {
    let modal = (course) => {
        Utils.common.renderReactDOM(<ApplyModal cour={course}/>)
    };
    let receive = () => {
        Utils.common.renderReactDOM(<ReceiveModal/>)
    };
    let success = () => {
        Utils.common.renderReactDOM(<Successmodal/>)
    };
    return {
        modal, receive,success
    }
})();
export default ApplyUtils;