import useGoFundMeScript from '../../hooks/useGoFundMeScript';

export default function GoFundMePlug({ children, ...prevProps }) {
    useGoFundMeScript('https://www.gofundme.com/static/js/embed.js')

    return(
        <div className={"gfm-embed gofundme"}  data-url="https://www.gofundme.com/f/bpyqf7-running-4-a-reason/widget/medium/"></div>
    )
}