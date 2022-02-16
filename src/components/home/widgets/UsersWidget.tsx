import classes from "./UsersWidget.module.css";

const UserWidget = () => {
  // const Button = (type:any) => {
  //   let btnType = 'classes.' + type;
  //   return <button className={`${classes.widget_button} ${btnType}`}>{type}</button>;
  // };

  const Button: React.FC<{ type: string }> = (props) => {
    let transactionStatus;
    if (props.type === "Approved") {
      transactionStatus = classes.Approved;
    } else if (props.type === "Pending") {
      transactionStatus = classes.Pending;
    } else {
      transactionStatus = classes.Declined;
    }
    return (
      <button className={`${classes.widget_button} ${transactionStatus}`}>
        {props.type}
      </button>
    );
  };
  return (
    <div className={classes.widget}>
      <h3 className={classes.widget_title}>Latest Transactions</h3>
      <table className={classes.widget_table}>
        <thead>
          <tr className={classes.widget_tr}>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className={classes.widget_tr}>
            <td className={classes.widget_user}>
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className={classes.widget_img}
              />
              <span className={classes.widget_name}>Susan Carol</span>
            </td>
            <td className={classes.widget_date}>2 Jun 2021</td>
            <td className={classes.widget_amount}>$122.00</td>
            <td className={classes.widget_status}>
              <Button type="Approved" />
            </td>
          </tr>
          <tr className={classes.widget_tr}>
            <td className={classes.widget_user}>
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className={classes.widget_img}
              />
              <span className={classes.widget_name}>Susan Carol</span>
            </td>
            <td className={classes.widget_date}>2 Jun 2021</td>
            <td className={classes.widget_amount}>$122.00</td>
            <td className={classes.widget_status}>
              <Button type="Declined" />
            </td>
          </tr>
          <tr className={classes.widget_tr}>
            <td className={classes.widget_user}>
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className={classes.widget_img}
              />
              <span className={classes.widget_name}>Susan Carol</span>
            </td>
            <td className={classes.widget_date}>2 Jun 2021</td>
            <td className={classes.widget_amount}>$122.00</td>
            <td className={classes.widget_status}>
              <Button type="Pending" />
            </td>
          </tr>
          <tr className={classes.widget_tr}>
            <td className={classes.widget_user}>
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className={classes.widget_img}
              />
              <span className={classes.widget_name}>Susan Carol</span>
            </td>
            <td className={classes.widget_date}>2 Jun 2021</td>
            <td className={classes.widget_amount}>$122.00</td>
            <td className={classes.widget_status}>
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserWidget;
