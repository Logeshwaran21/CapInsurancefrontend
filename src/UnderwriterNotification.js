import React from 'react';
import RX from 'reactxp';
import { Nav, View, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, label, Visible, Checkbox, lg, xs } from 'react-bootstrap';
import { Rejected } from 'synctasks';


/*const {
Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#2a647d0a'
    }),
    navcontainer: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(32, 122, 142)',
        height: 50,
        padding: 5
    }),
    navwelcome: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight: 1010,
        color: 'white',
        marginTop: '5'
    }),
    navwelcome2: RX.Styles.createTextStyle({
        fontSize: 15,
        marginLeft: 1182,
        marginTop: -22,
        color: 'white',

    }),
    navwelcomehome: RX.Styles.createTextStyle({
        fontSize: 15,
        marginLeft: 1000,
        marginTop: -22,
        color: 'white',

    }),
    button1: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 72,
        height: 5,
        marginLeft: 1035,
        marginBottom: -23,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: "white",
        marginTop: -40,
        textAlign: "center"
    }),

    button2: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 72,
        height: 5, 
        // marginLeft: 1035,
        marginBottom: -23,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: "white",
        // marginTop: -40,
        textAlign: "center"
    }),

    pack: RX.Styles.createButtonStyle({
        marginLeft: 654,
        marginTop: -295
    }),
    treat: RX.Styles.createButtonStyle({
        marginLeft: 335,
        marginTop: -276
    }),
    inputtable: RX.Styles.createTextStyle({

        width: 119,
        fontWeight:100

    }),
    table: RX.Styles.createTextStyle({

        marginLeft: -15

    }),



    navrqlogo: RX.Styles.createViewStyle({
        height: 20,
        width: '30%',
        marginTop: '5',
        marginBottom: -20,
        marginRight: 1200
    }),

    sidenavbar: RX.Styles.createTextStyle({
        fontSize: 15,
        marginLeft: -70,
        color: 'white',
        // marginTop:-56,
        width: 200,
        height: 620,
        backgroundColor: '#242536'
    }),

    dashboard: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight: 1150,
        color: 'black',
        marginTop: -620

    }),
    InputSelectorCopy: RX.Styles.createTextStyle({

        borderWidth: 1,
    }),
    sideText: RX.Styles.createTextStyle({

    }),
    allHistorybtn: RX.Styles.createTextStyle({

        marginLeft: 16

    }),
    policyrules: RX.Styles.createTextStyle({

        marginLeft: 50,
        width: 829,
        height: 900,
        font: 400,
        marginTop: 22
    }),
    divpolicyrules: RX.Styles.createTextStyle({

        backgroundColor: "#80808080",
        width: 948,
        height: 300,
        marginRight: 328,
        marginTop: 123
    }),

    details: RX.Styles.createTextStyle({

        backgroundColor: "#80808080",
        width: 997,
        height: 437,
        marginLeft: -34,
        marginTop: 88
    }),

    heading: RX.Styles.createTextStyle({
        marginLeft: 276,

    }),
    policyheading: RX.Styles.createTextStyle({
        marginLeft: 335,

    }),
    InputSelectorCopy: RX.Styles.createTextStyle({

        borderWidth: 1,
    }),
    Form: RX.Styles.createViewStyle({
        display: 'block',
        width: 434,
        height: 32,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        // color: "white",
        // backgroundColor: "#fff",
        // borderWidth: 1,
        // borderColor: "#ccc",
        // borderRadius: 4,
        marginLeft: 55
    }),
};

var resJson1
var res
var policyid
var responseJson
var result
var products
var filterdata
let re
let FilteredList
let List
var filterdata
var updatedList1
var sortBy
var desc
export default class Underwriterpage extends RX.Component {
    constructor(props) {
        super(props);
        tparesult = this.props.navigatorRoute.res
        console.log("Props console:", tparesult)
        
        // res1 = this.props.navigatorRoute.res1
        // console.log("Props console1:", res1)
// var tparesult=[res+res1]
// console.log("underwriternotification page:",tparesult)

        this.state = {
            search: '',
            initialItems: tparesult,
            items: [],
           
            tparesult: tparesult,
            // tparesult1: tparesult1,

        };
this.sortBy=this.sortBy.bind(this)
        console.log("state console:", tparesult)

    }
   
    sortBy(key){
        console.log("test key",key)
        this.setState({
            
        tparesult:tparesult.sort()
       
    })
    console.log("hiiiii",tparesult)
    }
    
    
        updateSearch(event){
           
            this.setState({search:event.target.value.substr(0,20)});
        }
    
    
    //============================SubmitID Filter Start================================
    filterListpolicyid = (event) => {
        var updatedList = this.state.initialItems;
        console.log("Filter subid console", updatedList)
        updatedList1 = updatedList.filter(function (item) {
            return item.policyid.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList1 });

        console.log("filter submit updated list", updatedList1)

    }
    

    //=============================SubmitID filter End========================================

    //=========================Name Filter Start===========================
    filterListPolicyName = (event) => {
        var updatedList = this.state.initialItems;
        console.log("filterconsole", updatedList)
        updatedList1 = updatedList.filter(function (item) {
            return item.policyName.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList1 });

        console.log("updated list", updatedList1)

    }
    //=============================Name Filter End==============================

    //=========================AGE Filter Start===========================
    filterListPolicyCategory = (event) => {
        var updatedList = this.state.initialItems;
        console.log("filterconsole", updatedList)
        updatedList1 = updatedList.filter(function (item) {
            return item.policycatagory.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList1 });

        console.log("updated list", updatedList1)

    }
      //=============================AGE Filter End==============================

    //=========================SEX Filter Start===========================
    filterListPremium = (event) => {
        var updatedList = this.state.initialItems;
        console.log("filterconsole", updatedList)
        updatedList1 = updatedList.filter(function (item) {
            return item.policypercentage.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList1 });

        console.log("updated list", updatedList1)

    }

    

    // filterListPolicyDate = (event) => {
    //     var updatedList = this.state.initialItems;
    //     console.log("filter policy date", updatedList)
    //     updatedList1 = updatedList.filter(function (item) {
    //         return item.created_at.toLowerCase().search(
    //             event.target.value.toLowerCase()) !== -1;
    //     });
    //     this.setState({ items: updatedList1 });

    //     console.log("updated list", updatedList1)

    // }
    //=============================SEX Filter End==============================

    //=========================Reference Doctor Filter Start===========================
    filterListPaymentRule = (event) => {
        var updatedList = this.state.initialItems;
        console.log("filterconsole", updatedList)
        updatedList1 = updatedList.filter(function (item) {
            return item.rules.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList1 });

        console.log("updated list", updatedList1)

    }
    //=============================Reference Doctor Filter End==============================

    //=========================claimAmount Filter Start===========================
    filterListCollateral = (event) => {
        var updatedList = this.state.initialItems;
        console.log("filterconsole", updatedList)
        updatedList1 = updatedList.filter(function (item) {
            return item.inputradio.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList1 });

        console.log("updated list", updatedList1)

    }
    //=============================claimAmount Filter End==============================


    //=========================status Filter Start===========================
    filterListStatus = (event) => {
        var updatedList = this.state.initialItems;
        console.log("filterconsole", updatedList)
        updatedList1 = updatedList.filter(function (item) {
            return item.status.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList1 });

        console.log("updated list", updatedList1)

    }
    //=============================status Filter End==============================

    // initial funtion for loading data
    componentWillMount() {
        this.setState({ items: this.state.initialItems })

    }
    handleChange1 =   (data, event) => {
        if (event.target.checked == true) {


            var policyid = data.Key
            this.setState({ policyid: policyid })
            console.log("policyid console", policyid)

            var policyName = data.Record.policyName
            this.setState({ policyName: policyName })
            console.log("policyName console", policyName)

            var policycatagory = data.Record.policycatagory
            this.setState({ policycatagory: policycatagory })
            console.log("policycatagory console", policycatagory)

            var rules = data.Record.rules
            this.setState({ rules: rules })
            console.log("rules console", rules)

            var policypercentage = data.Record.policypercentage
            this.setState({ policypercentage: policypercentage })
            console.log("policypercentage console", policypercentage)

            var inputradio = data.Record.inputradio
            this.setState({ inputradio: inputradio })
            console.log("inputradio console", inputradio)

            var status = Approved
            this.setState({ status: status })
            console.log("status console", status)

        } else {
            return alert("Select atleast one Rule")
        }


      
    }



    //========================Mapping table Start============================
    renderProducts() {

         console.log("hello")
        // var ldata = this.state.items
        //   console.log("renderproducts console", ldata)
        return this.state.items.map(items => {

            //console.log("Map console", items)
            return (

                <tr key={items.policyid}>
                   {/* <td><input type="Checkbox" ref="check_me"
                        onChange={(event) => this.handleChange1(items, event)} /></td> */}
                    {/* <td>{items.Key}</td> */}
                    <td>{items.registerId}</td>
                   
                    <td>{items.policyid}</td>
                    <td>{items.notifiedDate}</td>
                    <td>{items.companyName}</td>
                    <td>{items.claimAmount}</td>
                    {/* <td>{items.status}</td> */}
                   {/* <td>
<RX.Button style={[styles.button2]} onPress={() => this.onChangeNotifyApprove()} >Approve</RX.Button></td>
                     <td>
                        <RX.Button
                       
                       style={[styles.button2]}
                        onPress={() => this.onChangeNotifyReject()}
                    >Reject</RX.Button></td> */}
                </tr>


            );
            // this.filterList()


        })

    }

    onChangeNotifyApprove = () => {



        console.log("Enter Into the notify approved status")
        return fetch('http://localhost:8082/notifyApprove', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
 
            },
 
            body: JSON.stringify({
 
                policyid: this.state.policyid,
                policyName: this.state.policyName,
                policycatagory: this.state.policycatagory,
                policypercentage: this.state.policypercentage,
                rules: this.state.rules,
                inputradio: this.state.inputradio,
                "status": "Approved"
 
            }),
        }).then((res) => res.json()).then((responseJson) => {
 
            var res = responseJson;
            console.log("response", res)
            var res1 = res.message;
            // var responseJson = JSON.stringify(res)
            console.log("response", res1)
            swal(res1)
            // console.log("response", res)
             this.props.onNavigateCaptivePolicy(res)
 
        })
 
    }

    onChangeNotifyReject = () => {



        console.log("Enter Into the notify Reject status")
        return fetch('http://localhost:8082/notifyReject', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
 
            },
 
            body: JSON.stringify({
 
                "policyid": this.state.policyid,
                "policyName": this.state.policyName,
                "policycatagory": this.state.policycatagory,
                "policypercentage": this.state.policypercentage,
                "rules": this.state.rules,
                "inputradio": this.state.inputradio,
                "status": "Rejected"
 
            }),
        }).then((res) => res.json()).then((responseJson) => {
 
            var res = responseJson;
            console.log("response", res)
            var res1 = res.message;
            // var responseJson = JSON.stringify(res)
            console.log("response", res1)
            swal(res1)
            // console.log("response", res)
             this.props.onNavigateCaptivePolicy(res)
 
        }).catch(function () {
            console.log("error");
        });
 
    }
    //============================================Maping Table End================================

    componentDidMount() {

    }


    render() {


        filterdata = this.state.tparesult
        
        return (


            <RX.ScrollView style={styles.scroll}>
                <RX.View style={styles.navcontainer}>
                    <RX.Image source={'./src/img//RapidQube logo-01.png'} style={[styles.navrqlogo]} />
                    <RX.Text style={styles.navwelcome}>
                    <b>CAPTIVE INSURANCE</b>
                    </RX.Text>
                    <RX.Button style={styles.navwelcomehome} onPress={this.props.onNavigateUnderwriterhome}>
                        <b>Home</b>
                    </RX.Button>
                    <RX.Button style={styles.navwelcome2} onPress={this.props.onNavigateUnderwriterNotificationlogout}>
                        <b>Logout</b>
                    </RX.Button>
                </RX.View>

                <div class="container">
                    <h1>Received Claim Requests</h1>
                   
                </div>
                <RX.View>
                
                    <Grid>
                        <div className="container">
                            <br />
                            <br />
                          
                            <table className="table" id="myTable" style={styles.table}>
                                <thead>
                                    <tr class="header" id="row">
                                    {/* <th>Checkbox:
                                      
                                    </th> */}
                                        <th>Register ID
                                        {/* <tbody>
                                                <input type="text" style={styles.inputtable} placeholder="Enter Id" onChange={this.filterListpolicyid} />
                                            </tbody> */}
                                        </th>
                                        <th>Policy ID
                                        {/* <tbody>
                                                <input type="text" style={styles.inputtable} placeholder="Enter Name" onChange={this.filterListPolicyName} />
                                            </tbody> */}
                                        </th>
                                        
                                          <th>Notified Date
                                        {/* <tbody>
                                                <input type="text" style={styles.inputtable} placeholder="Enter Gender" onChange={this.filterListPolicyCategory} />
                                            </tbody> */}
                                        </th>
                                        <th>Company Name
                                        {/* <tbody>
                                                <input type="text" style={styles.inputtable} placeholder="Enter Amount" onChange={this.filterListPremium} />
                                            </tbody> */}
                                        </th>
                                        <th>Claim Amount
                                        {/* <tbody>
                                                <input type="text" style={styles.inputtable} placeholder="Enter Name" onChange={this.filterListPaymentRule} />
                                            </tbody> */}
                                        </th>
                                      
                                        {/* <th>Collateral */}
                                        {/* <tbody>
                                                <input type="text" style={styles.inputtable} placeholder="Enter Status" onChange={this.filterListCollateral} />
                                            </tbody> */}
                                        {/* </th> */}
                                        {/* <th>Status
                                        <tbody>
                                                <input type="text" style={styles.inputtable} placeholder="Enter Status" onChange={this.filterListStatus} />
                                            </tbody>
                                        </th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                    {/* //onChange={this.updatesearch.bind(this)} --input field */}


                                    {this.renderProducts()}

                                </tbody>
                            </table>

                        </div>
                    </Grid>




                </RX.View>
            </RX.ScrollView>

        );
    }
}