import MainHeader from "../Header"

const Container = ({ children }) => {

    return (
        <>
            <MainHeader></MainHeader>
            <div className={"content"}>
                {children}
            </div>
            
        </>
    )
}

export default Container