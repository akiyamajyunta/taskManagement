
import bank from '../imgs/bank.png'
import eat from '../imgs/eat.png'
import game from '../imgs/game.png'

import garden from '../imgs/garden.png'
import hospital from '../imgs/hospital.png'
import job from '../imgs/job.png'
import look from '../imgs/look.png'

import sanpo from '../imgs/sanpo.png'
import school from '../imgs/school.png'
import shop from '../imgs/shop.png'
import train from '../imgs/train.png'
import another from '../imgs/another.png'

import { ref } from 'vue'

export const ImgsCollection  = [bank, eat,game,garden ,hospital,job,look,sanpo,school,shop,train,another];



export const lists= ref([
    {name: '銀行',photo: ImgsCollection[0],},
    {name: '食事',photo: ImgsCollection[1],},
    {name: 'ゲーム',photo: ImgsCollection[2],},
    {name: '庭',photo: ImgsCollection[3],},
    {name: '病院',photo: ImgsCollection[4],},
    {name: '仕事',photo: ImgsCollection[5],},
    {name: '探し物',photo: ImgsCollection[6],},
    {name: 'ペット',photo: ImgsCollection[7],},
    {name: '学校',photo: ImgsCollection[8],},
    {name: '買い物',photo: ImgsCollection[9],},
    {name: '交通',photo: ImgsCollection[10],},
    {name: 'その他',photo: ImgsCollection[11],},
])


export const photoCollection :{[key: string]: string}= {
    "銀行":bank,
    "食事":eat,
    "ゲーム":game,
    "庭":garden,
    "病院":hospital,
    "仕事":job,
    "探し物":look,
    "ペット":sanpo,
    "学校":school,
    "買い物":shop,
    "交通":train,
    "その他":another,
}
