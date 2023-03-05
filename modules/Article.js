export default function Article() {
    return (
        <div className="article_card" style={{backgroundImage: `url('/article_image.png')`}}>
            <div className="article_content">
                <span className="article_badge">UI/UX</span>
                <h4 className="text-white f-400 mt-1">Future of Work</h4>
                <h6 className="f-300 text-white l-21">Majority of peole will work in jobs that don’t exist today.</h6>
                <div className="article_author d-flex d-justify-space-between d-flex-wrap">
                    <div className="col-7 d-flex d-align-center">
                        <img src="/article_avatar.png" alt="Author Profile" />
                        <span className="f-400 text-white">Richard Jones</span>
                    </div>
                    <div className="col-5 d-flex d-flex-wrap d-justify-end">
                        <span className="d-flex d-justify-end col-12 text-white f-700">02 May</span>
                        <h6 className="text-white d-flex d-align-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Icon  3">
                                <circle id="Oval" opacity="0.15" cx="12" cy="12" r="12" fill="#36B37E"/>
                                <path id="Icon" d="M10.3984 15.8242L7.13666 12.582C7.04551 12.4909 6.99994 12.3737 6.99994 12.2305C6.99994 12.0872 7.04551 11.9701 7.13666 11.8789L7.85931 11.1758C7.95046 11.0716 8.06439 11.0195 8.20111 11.0195C8.33783 11.0195 8.45827 11.0716 8.56244 11.1758L10.7499 13.3633L15.4374 8.6758C15.5416 8.57163 15.662 8.51955 15.7987 8.51955C15.9355 8.51955 16.0494 8.57163 16.1405 8.6758L16.8632 9.37892C16.9543 9.47007 16.9999 9.58726 16.9999 9.73048C16.9999 9.87371 16.9543 9.9909 16.8632 10.082L11.1015 15.8242C11.0103 15.9284 10.8932 15.9805 10.7499 15.9805C10.6067 15.9805 10.4895 15.9284 10.3984 15.8242Z" fill="#36B37E"/>
                                </g>
                            </svg>
                            Verified writer
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
