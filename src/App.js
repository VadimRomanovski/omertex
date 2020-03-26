import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      useIpEthernet: "true",
      useDnsEthernet: "true",
      defaultIpWireless: "true",
      defaultDnWireless: "true",
      enableWiFi: "",
      networkName: "",
      enableWiFiSecurity: "",
      networkPassword: "",
      clientIpEthernet: "",
      subnetMaskEthernet: "",
      gatewayEthernet: "",
      clientDns: "",
      alternativeDns: "",
      clientIpWireless: "",
      subnetMaskWireless: "",
      gatewayWireless: "",
      clientDnsWireless: "",
      alternativeDnsWireless: "",
      errors: "",
    };
    this.handleChange = this.handleChange.bind(this)
    this.enableWiFi = this.enableWiFi.bind(this)
    this.cancelSets = this.cancelSets.bind(this)
    this.validation = this.validation.bind(this)
    this.sendForm = this.sendForm.bind(this)
  }

handleChange(e){
    const {name, value} = e.target
    this.setState({
        [name]: value
    })
}

cancelSets(e){
  this.setState({
    useIpEthernet: "true",
    useDnsEthernet: "true",
    defaultIpWireless: "true",
    defaultDnWireless: "true",
    networkName: "",
    enableWiFi: "",
    clientIpEthernet: "",
    subnetMaskEthernet: "",
    gatewayEthernet: "",
    clientDns: "",
    alternativeDns: "",
    clientIpWireless: "",
    subnetMaskWireless: "",
    gatewayWireless: "",
    clientDnsWireless: "",
    alternativeDnsWireless: "",
    networkPassword: "",
    enableWiFiSecurity: "",
    errors: "",
  })
}

enableWiFi(e){
  this.setState({
    enableWiFi: e.target.value,
    enableWiFiSecurity: "",
    defaultIpWireless: "true",
    defaultDnWireless: "true",
    clientIpWireless: "",
    subnetMaskWireless: "",
    gatewayWireless: "",
    clientDnsWireless: "",
    alternativeDnsWireless: "",
    networkName: "",
    networkPassword: "",
    errors: "",
  })
}

validation(e){

  if(this.state.useIpEthernet === ""){

    if(!this.state.subnetMaskEthernet){
      this.setState({
        errors: "Subnet Mask field must be filled"
      })
    }else if(!this.state.subnetMaskEthernet.match(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/)){
      this.setState({
        errors: "Invalid Subnet Mask"
      })
    }else if(this.state.clientIpEthernet === this.state.subnetMaskEthernet){
      this.setState({
        errors: "IP address and Subnet Mask can't be the same"
      })
    }
    
    if(!this.state.clientIpEthernet){
      this.setState({
        errors: "'IP address' field must be filled"
      })
    }else if(!this.state.clientIpEthernet.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)){
      this.setState({
        errors: "Invalid IP address"
      })
    }
  } 
  
  if(this.state.useDnsEthernet === ""){
    if(!this.state.alternativeDns){
      this.setState({
        errors: "'Alternative DNS server' field must be filled"
      })
    }else if(!this.state.alternativeDns.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)){
      this.setState({
        errors: "Invalid DNS server address"
      })
    }else if(this.state.clientDns === this.state.alternativeDns){
      this.setState({
        errors: "Preffered DNS server and Alternative DNS server can't be the same"
      })
    }else{
      this.setState({
        errors: ""
      })
    }

    if(!this.state.clientDns){
      this.setState({
        errors: "'Preffered DNS server' field must be filled"
      })
    }else if(!this.state.clientDns.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)){
      this.setState({
        errors: "Invalid DNS server address"
      })
    }
  }

  if(this.state.enableWiFi === "true"){
    if(this.state.networkName === ""){
      this.setState({
        errors: "You must select 'Wireless Network Name'"
      })
    }else{
      this.setState({
        errors: ""
      })
    }
  }

  if(this.state.enableWiFiSecurity === "true"){
    if(this.state.networkPassword === ""){
      this.setState({
        errors: "'Security Key' field must be filled"
      })
    }
  }

  if(this.state.defaultIpWireless === ""){
    if(!this.state.subnetMaskWireless){
      this.setState({
        errors: "'Subnet Mask' field must be filled in 'Wireless Settings'"
      })
    }else if(!this.state.subnetMaskWireless.match(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/)){
      this.setState({
        errors: "Invalid 'Subnet Mask' in 'Wireless Settings'"
      })
    }else if(this.state.subnetMaskWireless === this.state.subnetMaskEthernet){
      this.setState({
        errors: "'IP-address' and 'Subnet Mask' in 'Wireless Settings' can't be the same"
      })
    }

    if(!this.state.clientIpWireless){
      this.setState({
        errors: "'IP-address' in 'Wireless Settings' field must be filled"
      })
    }else if(!this.state.clientIpWireless.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)){
      this.setState({
        errors: "Invalid 'IP-address' in 'Wireless Settings'"
      })
    }
  }

  if(this.state.defaultDnWireless === ""){
    if(!this.state.alternativeDnsWireless){
      this.setState({
        errors: "'Alternative DNS server' field in 'Wireless Settings' must be filled"
      })
    }else if(!this.state.alternativeDnsWireless.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)){
      this.setState({
        errors: "Invalid DNS server address in 'Wireless Settings'"
      })
    }else if(this.state.alternativeDnsWireless === this.state.clientDnsWireless){
      this.setState({
        errors: "'Preffered DNS server' and 'Alternative DNS server' in 'Wireless Settings' can't be the same"
      })
    }else{
      this.setState({
        errors: ""
      })
    }

    if(!this.state.clientDnsWireless){
      this.setState({
        errors: "'Preffered DNS server' field in 'Wireless Settings' must be filled"
      })
    }else if(!this.state.clientDnsWireless.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)){
      this.setState({
        errors: "Invalid DNS server address in 'Wireless Settings'"
      })
    }
  }

  setTimeout(this.sendForm,0)
  
}

sendForm(){
  let settings = {
    ethernetIP: this.state.clientIpEthernet,
    subnetMaskEthernet: this.state.subnetMaskEthernet,
    gatewayEthernet: this.state.gatewayEthernet,
    prefferedDnsServerEthernet: this.state.clientDns,
    alternativeDnsEthernet: this.state.alternativeDns,
    enableWiFi: this.state.enableWiFi,
    networkName: this.state.networkName,
    securityKey: this.state.networkPassword,
    wirelessIP: this.state.clientIpWireless,
    subnetMaskWireless: this.state.subnetMaskWireless,
    gatewayWireless: this.state.gatewayWireless,
    prefferedDnsServerWireless: this.state.clientDnsWireless,
    alternativeDnsWireless: this.state.alternativeDnsWireless,
  }
  if(this.state.errors === ""){
    console.log(JSON.stringify(settings))
  }
}

render(){
  return (
    <div className="main">
      <div className="wrap">
        <div className="forms">
          <div className="ethernet block">
            <form className="ethernet__form">
              <legend>Ethernet Settings</legend>  
              <div className="ethernet__buttons">
                <label> 
                  <input
                    id="default-ip"
                    type="radio"
                    name="useIpEthernet"
                    value="true"
                    onChange={this.handleChange}
                    checked={this.state.useIpEthernet === "true"}
                  />
                  Obtain an IP address automatically (DHCP/BootP)
                </label>
                <label>
                  <input
                    id="use-ip"
                    type="radio"
                    name="useIpEthernet"
                    value=""
                    onChange={this.handleChange}
                    checked={this.state.useIpEthernet === ""}
                  />
                  Use the following IP address:
                </label>
              </div>
              <div className="ethernet__inputs">
                <lable className={this.state.useIpEthernet ? 'disable-text' : ''}>
                  IP-address:*
                  <input 
                    id="client-ip"
                    type="text"
                    name="clientIpEthernet"
                    value={this.state.clientIpEthernet}
                    disabled={this.state.useIpEthernet}
                    onChange={this.handleChange}
                  />
                </lable>
                <lable className={this.state.useIpEthernet ? 'disable-text' : ''}>
                  Subnet Mask:*
                  <input 
                    id="subnet-mask"
                    type="text"
                    name="subnetMaskEthernet"
                    value={this.state.subnetMaskEthernet}
                    disabled={this.state.useIpEthernet}
                    onChange={this.handleChange}
                  />
                </lable>
                <lable className={this.state.useIpEthernet ? 'disable-text' : ''}>
                  Default Gateway:
                  <input 
                    id="gateway"
                    type="text"
                    name="gatewayEthernet"
                    value={this.state.gatewayEthernet}
                    disabled={this.state.useIpEthernet}
                    onChange={this.handleChange}
                  />
                  </lable>
              </div>
              <div className="ethernet__buttons">
                <label >
                  <input
                    id="default-dns"
                    type="radio"
                    name="useDnsEthernet"
                    value="true"
                    onChange={this.handleChange}
                    checked={this.state.useDnsEthernet === "true"}
                  />
                  Obtain DNS server address automatically
                </label>
                <label>
                  <input
                    id="use-dns"
                    type="radio"
                    name="useDnsEthernet"
                    value=""
                    onChange={this.handleChange}
                    checked={this.state.useDnsEthernet === ""}
                  />
                  Use the following DNS server address:
                </label>
              </div>
              <div className="ethernet__inputs">
                <lable className={this.state.useDnsEthernet ? 'disable-text' : ''}>
                  Preffered DNS server:*
                  <input 
                    id="client-dns"
                    type="text"
                    name="clientDns"
                    value={this.state.clientDns}
                    disabled={this.state.useDnsEthernet}
                    onChange={this.handleChange}
                  />
                </lable>
                <lable className={this.state.useDnsEthernet ? 'disable-text' : ''}>
                  Alternative DNS server:*
                  <input 
                    id="alternative-dns"
                    type="text"
                    name="alternativeDns"
                    value={this.state.alternativeDns}
                    disabled={this.state.useDnsEthernet}
                    onChange={this.handleChange}
                  />
                </lable>
              </div>
              <p className="errors">{this.state.errors}</p>
            </form>
          </div>

          <div className="wireless block">
            <form className="wireless-form">
              <legend>Wireless Settings</legend> 
              <lable>
                <input
                  id="enable-wifi"
                  type="checkbox"
                  name="enableWiFi"
                  value={this.state.enableWiFi ? "" : "true"}
                  checked={this.state.enableWiFi === "true"}
                  onChange={this.enableWiFi}
                />
                Enable wifi:
              </lable>
              <div className="wireless__networks">
                <label className={this.state.enableWiFi ? '' : 'disable-text'}>
                  Wireless Network Name:*
                  <select 
                    className="wireless__list" 
                    name="networkName" 
                    disabled={this.state.enableWiFi==="" ? "disabled" : ""} 
                    onChange={this.handleChange} 
                    value={this.state.networkName}
                  >
                    <option value=""></option>
                    <option value="network_1">Network 1</option>
                    <option value="network_2">Network 2</option>
                    <option value="network_3">Network 3</option>
                  </select>
                </label>
                <button className="button_circle">reload</button>
              </div>
              <lable className={this.state.enableWiFi ? '' : 'disable-text'}> 
                <input
                  id="enable-wifi-security"
                  type="checkbox"
                  name="enableWiFiSecurity"
                  disabled={this.state.enableWiFi==="" ? "disabled" : ""}
                  value={this.state.enableWiFiSecurity ? "" : "true"}
                  checked={this.state.enableWiFiSecurity === "true"}
                  onChange={this.handleChange}
                />
                Enable Wireless Security:
              </lable>
              <div className="wireless__security">
                <label className={this.state.enableWiFiSecurity ? '' : 'disable-text'}>
                  Security Key:*
                  <input
                    id="network-password"
                    type="password"
                    name="networkPassword"
                    value={this.state.networkPassword}
                    disabled={this.state.enableWiFiSecurity==="" ? "disabled" : ""}
                    onChange={this.handleChange}
                  />
                </label>
              </div> 
              <div className="wireless__buttons">
                <label className={this.state.enableWiFi ? '' : 'disable-text'}>
                  <input
                    id="default-ip-wireless"
                    type="radio"
                    name="defaultIpWireless"
                    disabled={this.state.enableWiFi==="" ? "disabled" : ""}
                    value="true"
                    onChange={this.handleChange}
                    checked={this.state.defaultIpWireless === "true"}
                  />
                  Obtain an IP address automatically (DHCP/BootP)
                </label>
                <label className={this.state.enableWiFi ? '' : 'disable-text'}>
                  <input
                    id="use-ip-wireless"
                    type="radio"
                    name="defaultIpWireless"
                    disabled={this.state.enableWiFi==="" ? "disabled" : ""}
                    value=""
                    onChange={this.handleChange}
                    checked={this.state.defaultIpWireless === ""}
                  />
                  Use the following IP address:
                </label>
              </div> 
              <div className="wireless__inputs">
                <lable className={this.state.defaultIpWireless ? 'disable-text' : ''}>
                  IP-address:*
                  <input 
                    id="client-ip-wireless"
                    type="text"
                    name="clientIpWireless"
                    value={this.state.clientIpWireless}
                    disabled={this.state.defaultIpWireless}
                    onChange={this.handleChange}
                  />
                </lable>
                <lable className={this.state.defaultIpWireless ? 'disable-text' : ''}>
                  Subnet Mask:*
                  <input 
                    id="subnet-mask-wireless"
                    type="text"
                    name="subnetMaskWireless"
                    value={this.state.subnetMaskWireless}
                    disabled={this.state.defaultIpWireless}
                    onChange={this.handleChange}
                  />
                </lable>
                <lable className={this.state.defaultIpWireless ? 'disable-text' : ''}>
                  Default Gateway:
                  <input 
                    id="gateway-wireless"
                    type="text"
                    name="gatewayWireless"
                    value={this.state.gatewayWireless}
                    disabled={this.state.defaultIpWireless}
                    onChange={this.handleChange}
                  />
                </lable>
              </div>
              <div className="wireless__buttons">
                <label className={this.state.enableWiFi ? '' : 'disable-text'}>
                  <input
                    id="default-dns-wireless"
                    type="radio"
                    name="defaultDnWireless"
                    disabled={this.state.enableWiFi==="" ? "disabled" : ""}
                    value="true"
                    onChange={this.handleChange}
                    checked={this.state.defaultDnWireless === "true"}
                  />
                  Obtain DNS server address automatically
                </label>
                <label className={this.state.enableWiFi ? '' : 'disable-text'}>
                  <input
                    id="use-dns-wireless"
                    type="radio"
                    name="defaultDnWireless"
                    disabled={this.state.enableWiFi==="" ? "disabled" : ""}
                    value=""
                    onChange={this.handleChange}
                    checked={this.state.defaultDnWireless === ""}
                  />
                  Use the following DNS server address:
                </label>
              </div>
              <div className="wireless__inputs">
                <lable className={this.state.defaultDnWireless ? 'disable-text' : ''}>
                  Preffered DNS server:*
                  <input 
                    id="client-dns-wireless"
                    type="text"
                    name="clientDnsWireless"
                    value={this.state.clientDnsWireless}
                    disabled={this.state.defaultDnWireless}
                    onChange={this.handleChange}
                  />
                </lable>
                <lable className={this.state.defaultDnWireless ? 'disable-text' : ''}>
                  Alternative DNS server:*
                  <input 
                    id="alternative-dns-wireless"
                    type="text"
                    name="alternativeDnsWireless"
                    value={this.state.alternativeDnsWireless}
                    disabled={this.state.defaultDnWireless}
                    onChange={this.handleChange}
                  />
                </lable>
              </div>
            </form>
          </div>
        </div>
        <div className="buttons">
          <input
            onClick={this.validation}
            className="button_colored"
            type="submit"
            value="Save"
          />
          <button 
            className="button_bordered"
            onClick={this.cancelSets}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
}
  

export default App;
