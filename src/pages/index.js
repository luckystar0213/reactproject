import Loadable from "react-loadable";
import Loading from "common/loading"


export const Home = Loadable({
    loader:_=>import("./home"),
    loading:Loading
})


export const Find = Loadable({
    loader:_=>import("./find"),
    loading:Loading
})



export const Cart = Loadable({
    loader:_=>import("./cart"),
    loading:Loading
})



export const Mine = Loadable({
    loader:_=>import("./mine"),
    loading:Loading
})

export const ProductList = Loadable({
    loader:_=>import("./productlist"),
    loading:Loading
})

export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
})

export const Detail = Loadable({
    loader:_=>import("./detail"),
    loading:Loading
})

export const SearchList = Loadable({
    loader:_=>import("./searchlist"),
    loading:Loading
})