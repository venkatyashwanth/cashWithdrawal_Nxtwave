import { Component } from "react";
import "./index.css";
import DenominationItem from "../DenominationItem";

class Cashwithdrawal extends Component {
    state = {
        username: "venkat yashwanth",
        balanceAmnt: 2000,
        sufficientBalance: true
    }
    handleWithdrawClick = (value) => {
        this.setState(prevSate => (prevSate.balanceAmnt >= value? {balanceAmnt: prevSate.balanceAmnt - value} : {balanceAmnt: prevSate.balanceAmnt - 0}))
        this.setState(prevSate => (prevSate.balanceAmnt >= value? {sufficientBalance: prevSate.sufficientBalance}:{sufficientBalance: !prevSate.sufficientBalance}))
    }

    render() {
        const { denominationsList } = this.props
        const {balanceAmnt,username,sufficientBalance} = this.state;
        // if(!sufficientBalance){alert("Low Balance!")}
        return (
            <div className="appBg">
                <div className="app-content">
                    <div className="user-profile">
                        <div className="initial">
                            <span>{username.slice(0,1)}</span>
                        </div>
                        <p>{username}</p>
                    </div>
                    <div className="balance-details">
                        <p>Your Balance</p>
                        <div className="balanceAmnt">
                            <span>{balanceAmnt}</span>
                            <span>In Rupees</span>
                        </div>
                    </div>
                    <div className="withdraw-panel">
                        <p>Withdraw</p>
                        <div className="withdraw-buttons">
                            <p>choose sum (in rupees)</p>
                            <ul className="btnsList">
                                {
                                    denominationsList.map(denomination =>
                                        <DenominationItem key={denomination.id} denominationValue={denomination.value} withdrawClick={this.handleWithdrawClick} />
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cashwithdrawal