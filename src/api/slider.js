import request from "../utils/request";
export function getSlider(data){
    return request({
        url :'/api/slider/getSliders'
    })
}