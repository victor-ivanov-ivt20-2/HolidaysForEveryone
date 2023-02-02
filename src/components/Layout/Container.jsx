import MainHeader from "../Header"

const Container = ({ children }) => {


    return (
        <>
            <MainHeader></MainHeader>
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default Container