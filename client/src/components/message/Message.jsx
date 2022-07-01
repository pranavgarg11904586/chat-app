import "./message.css"

export default function Message({own}) {
  return (
    <div className={own? "message own":"message"}>
        <div className="messageTop">
            <img
                className="messageImg"
                src="https://i2.wp.com/image.cnbcfm.com/api/v1/image/106807625-1607401571586-gettyimages-1057615164-775247724LZ036_China_Intern.jpeg?ssl=1"
                alt=""
                />
                        <p className="messageText">Hello this is a message</p>

        </div>

        <div className="messageBottom">1 hour ago </div>
    </div>
  )
}
