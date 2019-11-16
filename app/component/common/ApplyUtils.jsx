import React from "react";
import Utils from "../../common/Utils";
import ApplyModal from "./ApplyModal";
import ReceiveModal from "./ReceiveModal";
import Successmodal from "./Successmodal";
import ApplySuccessModal from "./ApplySuccessModal";
import SuccessFul from "./SuccessFul";

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
    let applySuccess = () => {
        Utils.common.renderReactDOM(<ApplySuccessModal/>)
    };
    let successFul = () => {
        Utils.common.renderReactDOM(<SuccessFul/>)
    };
    return {
        modal, receive, success, applySuccess, successFul,
    }
})();
export default ApplyUtils;
