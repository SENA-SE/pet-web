import {loginStart, loginSuccess, loginFailure} from './userRedux';
import {publicRequest} from '../requestMethods';
import {registerStart, registerSuccess, registerFailure} from './registerRedux';

export const login = async (dispatch, userForm) => {
    dispatch(loginStart());
    try {
        const {tel, password} = userForm
        const res = await publicRequest.get(`/login/login?password=${password}&tel=${tel}`);
        if(res.data.code === 200) {
            dispatch(loginSuccess({...res.data.data.user, token: res.data.data.token}));
        } else {
            throw new Error(res.data.data)
        }
    } catch (e) {
        // dispatch(loginFailure(e.response.data.msg));
        // console.log(e.response.data.msg);
        dispatch(loginFailure(e.message+", 请重试"));
    }

//     fetch('http://cyjspace.5gzvip.91tunnel.com:80/login/login?password=pass&tel=13500000000')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

// fetch('http://cyjspace.5gzvip.91tunnel.com:80/login/getMessage',{ //请求的服务器地址
//         //    body:"name=mumu&&age=20",  //请求的数据
//            // body:{name:"mumu",age:20}, //第二种请求数据的方法json
//            method:"GET", //请求方法
//            headers:{  //请求头信息
//             //    'Content-Type':'application/x-www-form-urlencoded' //用url编码形式处理数据
//             'token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2IiwiZXhwIjoxNjU0ODQzNzExLCJpYXQiOjE2NTQ1ODQ1MTF9.PfuGR_bHbyz_yMyhe7oeSqlpGf4H-E13HDPtTY5h-Y0'
//                // 'Content-Type':'application/json' //第二种请求头编写方式json
//            }
//        })
//        .then(res=>res.text()) //请求得到的数据转换为text
//        .then(res=>{
//            console.log(res)   //打印输出
//        })
//        .catch(err=>{    //错误打印
//            console.log(err)
//        })
};

export const register = async (dispatch, userForm) => {
    dispatch(registerStart());
    try {
        const {tel, password} = userForm
        const res = await publicRequest.post(`/login/register?password=${password}&tel=${tel}`);
        console.log(res)
        if(res.data.code === 200) {
            dispatch(registerSuccess(res.data));
        } else {
            throw new Error(res.data.msg)
        }
    } catch (e) {
        // dispatch(loginFailure(e.response.data.msg));
        // console.log(e.response.data.msg);
        dispatch(registerFailure(e.message+", 请重试"));
    }
}