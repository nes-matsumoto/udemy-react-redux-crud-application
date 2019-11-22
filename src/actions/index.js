export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//redux：reactでクラスコンポーネントのstate（状態）を管理するためのフレームワーク
//アクション：JavaScriptでのオブジェクトのこと。イベントをtypeとして定義する
//アクションクリエータ：actionを返す（戻り値とする）関数

//アクションクリエータ
export const increment = () =>({
        type: INCREMENT
})
//アクションクリエータ
export const decrement = () => ({
})



