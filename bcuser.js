class bcuser{
    constructor(id, cnCount, userName){
        this.id = id;
        this.cnCount = cnCount;
        this.userName = userName;
    }

    get getId(){
        return this.id;
    }

    get getCnCount(){
        return this.cnCount;
    }

    set setCnCount(v){
        this.cnCount = v;
    }

    get getUserName(){
        return this.userName;
    }

    get getUserInfo(){
        return 'ID:' + this.id + ' Count:' + this.cnCount + ' Name:' + this.userName;
    }

    transrateCoin(user, coin) {
        user.setCnCount = user.getCnCount + coin;
        this.setCnCount = this.getCnCount - coin;
    }
}

function createUser() {
    var user1 = new bcuser(1, 100, 'あらた');
    alert(user1.getUserInfo);

    var user2 = new bcuser(9, 100000000, 'お父さん');
    alert(user2.getUserInfo);

    user2.transrateCoin(user1, 1000000);
    alert(user1.getUserInfo);
    alert(user2.getUserInfo);
}