const data = {
    "data": {
        "menuList": [{
                name: 'menu1',
                icon: 'anticon-user',
                children: [{
                        name: 'test',
                        path: '/home/test'
                    },
                    {
                        name: 'test01',
                        path: '/home/test01'
                    },
                    {
                        name: 'map',
                        path: '/home/map'
                    },
                    {
                        name: 'table',
                        path: '/home/table'
                    },
                    {
                        name: 'camera',
                        path: '/home/camera'

                    }
                ]
            },
            {
                name: 'menu2',
                icon: 'anticon-laptop',
                children: [{
                        name: 'button',
                        path: '/home/button'
                    }
                ]
            }
        ],
        "buttonList": ['button'],
        "user": {
            "id": 1,
            "name": "123456",
            "roleId": 1,
            "time": 1526347398421,
            "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjY0MzM3OTgsInVzZXJuYW1lIjoiMTIzNDU2In0.kp4Es9J7KJYIDt6MtG2wjcFaTWy4nEGFy2vqUf9RkuM"
        }
    },
    "msg": "success",
    "result": "00000000"
}

module.exports = {
    data
};