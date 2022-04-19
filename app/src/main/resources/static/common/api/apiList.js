export const PATH = {
    USER: {
        list: `/user/list`,
        getLoginUser: '/user/getLoginUser',
        findByNickName: '/user/search/nickName',
    },
    DESTINATION: {
        userDesList: '/destination/user/list',
        getDes: '/destination/getDes',
    },
    TRAVEL: {
        travelList: '/travel/travelList',
        info: '/travel/getOne',
        updateName: '/travel/updateName',
        todoList: '/travel/todoList',
        addTodo: '/travel/addTodo',
        setTodoStatus: '/travel/todoStatus',
        todoName: '/travel/todoName',
        deleteTodo: '/travel/deleteTodo',
        costList: '/travel/costList',
        addCost: '/travel/addCost',
    },
};
// ===== 날짜 포멧 =====
export async function dateFormat(colon, date) {
    let OldDate = new Date(await date);
    let year = OldDate.getFullYear().toString();
    let month;
    if (OldDate.getMonth() + 1 < 10) {
        month = '0' + (OldDate.getMonth() + 1).toString();
    }
    let day;
    if (OldDate.getDate() < 10) {
        day = '0' + OldDate.getDate().toString();
    }
    let time = OldDate.getTime();

    let formatDate = year + colon + month + colon + day;

    return formatDate;
}

// ===== 유저 =====
// ---- 유저리스트를 가져온다. ----
export async function userList() {
    try {
        const response = await axios(PATH.USER.list);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ---- 유저의 로그인 여부를 확인한다. ----
export async function getLoginUser() {
    try {
        const response = await fetch(PATH.USER.getLoginUser).then(function (res) {
            return res.json();
        });
        return response;
    } catch (e) {
        console.log(e);
    }
}

// ---- 닉네임으로 유저 정보 가져오기 ----
export async function findByNickName(nickName) {
    try {
        const response = await fetch(`${PATH.USER.findByNickName}?nickName=${nickName}`).then(
            function (res) {
                return res.json();
            }
        );
        return response;
    } catch (e) {
        console.log(e);
    }
}

// ===== Destination ====
// ---- 회원이 작성한 여행지 리스트를 가져온다.----
export async function getUserDesList(userId) {
    try {
        const response = await axios(`${PATH.DESTINATION.userDesList}?userId=${userId}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ---- 여행 하나를 가지고 온다  ----
// type : 놀당 여행지 = N , 유저 여행지 = U
export async function getDes(id, type) {
    try {
        const response = await axios(`${PATH.DESTINATION.getDes}?desId=${id}&type=${type}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ===== Travel =====
// ---- 회원의 여행리스트 가져오기 ----
export async function travelList(nickName) {
    try {
        const response = await axios(`${PATH.TRAVEL.travelList}?nickName=${nickName}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ---- 여행 상세 정보를 가져온다 ----
export async function getTravel(travelId) {
    try {
        const response = await axios(`${PATH.TRAVEL.info}?travelId=${travelId}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ---- 여행 이름을 변경한다. ----
export async function updateTravelName(id, name) {
    try {
        const response = await axios({
            method: 'put',
            url: `${PATH.TRAVEL.updateName}?id=${id}&name=${name}`,
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ---- todoList를 가져온다. ----
export async function todoList(id) {
    try {
        const response = fetch(`${PATH.TRAVEL.todoList}?travelId=${id}`).then(function (res) {
            return res.json();
        });
        return response;
    } catch (e) {
        console.log(e);
    }
}

// ---- todo를 추가시킨다. ----
export async function addTodo(id, name) {
    try {
        const response = await axios({
            method: 'POST',
            url: `${PATH.TRAVEL.addTodo}?id=${id}&name=${name}`,
        });
        return (await response).data;
    } catch (e) {
        console.log(e);
    }
}

// ---- todo의 상태를 변경한다. ----
export async function setTodoStatus(id, status) {
    try {
        const response = await axios({
            method: 'PUT',
            url: `${PATH.TRAVEL.setTodoStatus}?todoId=${id}&status=${status}`,
        });
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ---- todo이름를 변경한다. ----
export async function updateTodo(id, name) {
    try {
        const response = await axios({
            method: 'put',
            url: `${PATH.TRAVEL.todoName}?todoId=${id}&name=${name}`,
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ---- todo를 삭제한다. ----
export async function deleteTodo(id) {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${PATH.TRAVEL.deleteTodo}?todoId=${id}`,
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ---- costList를 가져온다. ----
export async function costList(id) {
    try {
        const response = await axios(`${PATH.TRAVEL.costList}?travelId=${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// ---- cost 추가 ----
export async function addCost(cost = {}) {
    try {
        const reponse = await axios({
            method: 'POST',
            url: PATH.TRAVEL.addCost,
            data: cost,
        });
        return reponse.data;
    } catch (e) {
        console.log(e);
    }
}
