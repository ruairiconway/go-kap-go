import { useEffect } from "react"

function useGoFundMeScript(url) {
    useEffect(() => {
        // on mount
        const script = document.createElement('script')
        script.src = url
        script.defer = true
        document.body.appendChild(script)
        //on dismount
        return () => {
            document.body.removeChild(script)
        }
    }, [url])
} 

export default useGoFundMeScript