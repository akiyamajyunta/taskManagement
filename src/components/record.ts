// import { ref } from "vue";
// import { title, text, id, tag, sentence, storeId, idRecord } from './constant';
// //必用なモノ。1.タイトル、文章の保管。 2. １はIDで管理。そのIDを保管する配列


// export function set(){          
//     if(title.value  == "" && text.value == ""){
//         alert("記録してください")
//     }else{
//         //alert("保存されました")
//         id.value ++
//         setId()
//         setDate()
//         getId()
//         getDate()
//     }   
// }


// export function setId(){
//     idRecord.push(id.value)
//     localStorage.setItem('dateId', JSON.stringify(
//     {
//         id : idRecord
//     }
//     ));
// }// IDのセット

// export function setDate(){
//     localStorage.setItem(String(id.value),JSON.stringify(
//         {
//             title: title.value,
//             text: text.value
//         }
//         ))
// }

// export function getId():number[]{
//     const dateId = localStorage.getItem('dateId');//{"id":[0,1,2,3,4,5]}
//     if (dateId) {
//         const parsedDateId = JSON.parse(dateId)  // ここでプロパティdateIdにアクセス
//         const values = parsedDateId.id.map((item: string) => Number(item));//文字を数値に変換
//                 storeId.value = values[values.length -1];
//                     id.value = Number(storeId.value)//IDを更新
//             return values 
// }else{
//                     id.value = 0
//             return  []
// }

// }

// export function getDate(){
//     const dataList = localStorage.getItem(storeId.value);
//     if (dataList){
//         const data = JSON.parse(dataList);
//         tag.value = data.title
//         sentence.value = data.text
// }else{
// }
// }

