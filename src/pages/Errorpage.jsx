export default function Errorpage( { errorCode=404, message="Page could not be found" }){
    return(
        <div>
            <h1>Error {errorCode}</h1>
            <h3>Message from the developers: {message}</h3>
            <h3>Please contact customer services consultant Kyle John Boudville for further details.</h3>
        </div>
    )
}