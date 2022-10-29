const Notification = ({notif}) => {
    return (
        <div className="notif">
                {notif.map(error => (
                <h4 key={error}>{error}</h4>))}
            </div>
      );
}
 
export default Notification;