//Find
// db.<collection_name>.find({query}, {projection})
// query : document를 조회할때 조건 설정  -> where
// projection : document를 조회할때 보여지는 필드를 설정  -> select 

// db.info.find({"subject":"python"})

// 연산자 - 비교연산자: lt(e), gt(e)
// db.info.find({"level":{$lte:1}})

// $in
// db.info.find({"subject":{$in:["python","sql"]}})

// 연산자 - 논리연산자 $or, $and, $not, $nor (or와 반대)
// db.info.find({ $and : [{"subject":"python"},{"level":{"$lte":4}}] })

// db.info.insert([
// { "subject":"r", "level":3, "comments": [{"name":"jin","msg":"bad"}, {"name":"alice","msg":"hi"}] },
// { "subject":"java", "level":1, "comments": [{"name":"po","msg":"check"}] },
// { "subject":"javascript", "comments": [{"name":"jin","msg":"nice"}] },
// { "subject":"html", "level":3, "comments": [] },
// { "subject":"css", "level":1, "comments": [{"name":"alice", "msg":"hello"}] },
// { "subject":"python", "level":2, "comments": [{"name":"alice", "msg":"hello"}] },
// { "subject":"python", "level":5, "comments": [{"name":"jin","msg":"nice"}] }
// ])


// $where : where 연산자를 사용하면 자바스크립트 표현식 사용이 가능합니다.
// db.info.find( {$where: "this.comments.length >= 1" })

// $elemMatch
// db.info.find( {"comments":{$elemMatch:{"name":"alice"} } })

// $exists
// db.info.find({ level:{$exists:false} })

// projection
// 설정을 할때 true, false : _id 값은 따로 설정을 안하면 true
// db.info.find( {}, {"_id":false, "level":false} )
// db.info.find( {}, {"subject":true, "comments":true} )
// db.info.find( {}, {"_id":false,"subject":true, "comments":true} )

// $slice : 도큐멘트를 읽어올때 출력 갯수를 설정
// db.info.find({},{"comments":{$slice:1}} )

// find method - sort(myslq의 order by), limit, skip
// sort - 1: 오름차순, -1: 내림차순
// db.info.find({}).sort({"level":1})
// db.info.find({}).sort({"level":-1})

// 레벨로 sort하고 레벨이 같으면 _id로 sort
// db.info.find({}).sort({"level":-1, "_id":1})

// limit, skip
// db.info.find().limit(5)
// db.info.find().skip(2)
// db.info.find().skip(2).limit(5)


// function : 자바스크립트 문법으로 함수 작성이 가능합니다.
// var showSkip = function(start){
//     return db.info.find().skip(start)
// }
// 
// var showLimit = function(end){
//     return db.info.find().limit(end)
// }

// showSkip(2)
// showLimit(3)

db.info.find({},{})

// quiz
var showPage = function(page, block){ 
    var x = (page-1)*block
    return db.info.find().skip(x).limit(block)
}

showPage(2,3)

