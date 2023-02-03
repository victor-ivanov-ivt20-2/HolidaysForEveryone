import MainHeader from "../Header"
import MainFooter from "../Footer"
const Container = ({ children }) => {

    return (
        <>
            <MainHeader></MainHeader>
            <div className={"content"}>
                {children}
            </div>
            <MainFooter></MainFooter>
        </>
    )
}

export default Container