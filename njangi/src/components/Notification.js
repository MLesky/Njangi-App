const Notification = ({notif, style}) => {
    return (
        <div className="notif" id={style}>
                {notif.map(error => (
                <h4 key={error}>{error}</h4>))}
            </div>
      );
}
 
export default Notification;