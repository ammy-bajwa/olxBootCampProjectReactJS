import React, { Component } from 'react';
import Header from './Header';
import moment from 'moment';
import axios from "axios";
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


var itemImageBase64;
class Postad extends Component {
    success = () => {
        toast.success("Ad Posted Successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        });

    }
    error = () => {
        toast.error('Internal Error Occured', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    }
    handleFileInput = () => {
        let itemPic = document.getElementById('itemPic').value;
        document.getElementById('fileLabel').innerHTML = itemPic;
    }
    // encodeImageFileAsURL = () => {

    //     var filesSelected = document.getElementById("itemPic").files;
    //     if (filesSelected.length > 0) {
    //         var fileToLoad = filesSelected[0];

    //         var fileReader = new FileReader();

    //         fileReader.onload = function (fileLoadedEvent) {
    //             var srcData = fileLoadedEvent.target.result; // <--- data: base64
    //             itemImageBase64 = srcData;
    //             // var newImage = document.createElement('img');
    //             // newImage.src = srcData;

    //             // document.getElementById("imgTest").innerHTML = newImage.outerHTML;
    //             // alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
    //             // console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
    //         }
    //         fileReader.readAsDataURL(fileToLoad);
    //     }
    // }
    onSubmitAd = (e) => {
        e.preventDefault();
        let adTitle = document.getElementById('adTitle').value;
        let itemCondition = document.getElementById('condition').value;
        let price = document.getElementById('price').value;
        let city = document.getElementById('inputCity').value;
        let itemDetails = document.getElementById('itemDetails').value;
        let addressArray = document.location.pathname.split("/")
        let catogary = addressArray[1].toLowerCase();
        let subCatogary = addressArray[2].toLowerCase();
        let createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
        var filesSelected = document.getElementById("itemPic").files;
        let user = this.props.user.email;
        document.getElementById('sendBtn').setAttribute('disabled', 'true');
        let self = this;
        if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];

            var fileReader = new FileReader();

            fileReader.onload = function (fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64
                itemImageBase64 = srcData;
                // console.log(itemImageBase64);
                let itemPic = itemImageBase64;
                // console.log(itemImageBase64);
                // Send a POST request
                axios({
                    method: 'post',
                    url: '/ad/add',
                    data: {
                        adTitle, itemCondition, itemPic, price, city, itemDetails,
                        catogary, subCatogary, createdAt, user
                    }
                })
                    .then(function (response) {
                        if (response.data.message) {
                            self.error();
                            return
                        }
                        self.success();
                        setTimeout(() => {
                            self.props.history.goBack();
                        }, 2000);
                        console.log(response);
                    })
                    .catch(function (error) {
                        self.error();
                        console.log(error);
                    });
                // var newImage = document.createElement('img');
                // newImage.src = srcData;

                // document.getElementById("imgTest").innerHTML = newImage.outerHTML;
                // alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
                // console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
            }
            fileReader.readAsDataURL(fileToLoad);
        }

    }
    render() {
        return (
            <div className="container-fluid" id='postAdMain'>
                <Header history={this.props.history} />
                <div>
                    <ToastContainer />
                </div>
                    <div className='row h-100 justify-content-center align-items-center'>
                        <form className='m-4' onSubmit={this.onSubmitAd}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="adTitle">Ad Title</label>
                                    <input type="text" className="form-control" id="adTitle" placeholder="Ad Title" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="condition">Item Condition</label>
                                    <select className="custom-select" id='condition' required>
                                        <option value="1" defaultValue>One By Ten</option>
                                        <option value="2">Two By Ten</option>
                                        <option value="3">Three By Ten</option>
                                        <option value="4">Four By Ten</option>
                                        <option value="5">Five By Ten</option>
                                        <option value="6">Six By Ten</option>
                                        <option value="7">Seven By Ten</option>
                                        <option value="8">Eight By Ten</option>
                                        <option value="9">Nine By Ten</option>
                                        <option value="10">Ten By Ten</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Upload</span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" required onInput={this.handleFileInput} id="itemPic" />
                                        <label className="custom-file-label" id='fileLabel' name='itemPicInput' htmlFor="itemPic">Choose Picture</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="price">Price In RS</label>
                                    <input type="number" className="form-control" id="price" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <select className="custom-select" id='inputCity' required>
                                        <option className="option" value="Abbottabad">Abbottabad</option>
                                        <option className="option" value="Adezai">Adezai</option>
                                        <option className="option" value="Ali Bandar">Ali Bandar</option>
                                        <option className="option" value="Amir Chah">Amir Chah</option>
                                        <option className="option" value="Attock">Attock</option>
                                        <option className="option" value="Ayubia">Ayubia</option>
                                        <option className="option" value="Bahawalpur">Bahawalpur</option>
                                        <option className="option" value="Baden">Baden</option>
                                        <option className="option" value="Bagh">Bagh</option>
                                        <option className="option" value="Bahawalnagar">Bahawalnagar</option>
                                        <option className="option" value="Burewala">Burewala</option>
                                        <option className="option" value="Banda Daud Shah">Banda Daud Shah</option>
                                        <option className="option" value="Bannu district|Bannu">Bannu</option>
                                        <option className="option" value="Batagram">Batagram</option>
                                        <option className="option" value="Bazdar">Bazdar</option>
                                        <option className="option" value="Bela">Bela</option>
                                        <option className="option" value="Bellpat">Bellpat</option>
                                        <option className="option" value="Bhag">Bhag</option>
                                        <option className="option" value="Bhakkar">Bhakkar</option>
                                        <option className="option" value="Bhalwal">Bhalwal</option>
                                        <option className="option" value="Bhimber">Bhimber</option>
                                        <option className="option" value="Birote">Birote</option>
                                        <option className="option" value="Buner">Buner</option>
                                        <option className="option" value="Burj">Burj</option>
                                        <option className="option" value="Chiniot">Chiniot</option>
                                        <option className="option" value="Chachro">Chachro</option>
                                        <option className="option" value="Chagai">Chagai</option>
                                        <option className="option" value="Chah Sandan">Chah Sandan</option>
                                        <option className="option" value="Chailianwala">Chailianwala</option>
                                        <option className="option" value="Chakdara">Chakdara</option>
                                        <option className="option" value="Chakku">Chakku</option>
                                        <option className="option" value="Chakwal">Chakwal</option>
                                        <option className="option" value="Chaman">Chaman</option>
                                        <option className="option" value="Charsadda">Charsadda</option>
                                        <option className="option" value="Chhatr">Chhatr</option>
                                        <option className="option" value="Chichawatni">Chichawatni</option>
                                        <option className="option" value="Chitral">Chitral</option>
                                        <option className="option" value="Dadu">Dadu</option>
                                        <option className="option" value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                                        <option className="option" value="Dera Ismail Khan">Dera Ismail Khan</option>
                                        <option className="option" value="Dalbandin">Dalbandin</option>
                                        <option className="option" value="Dargai">Dargai</option>
                                        <option className="option" value="Darya Khan">Darya Khan</option>
                                        <option className="option" value="Daska">Daska</option>
                                        <option className="option" value="Dera Bugti">Dera Bugti</option>
                                        <option className="option" value="Dhana Sar">Dhana Sar</option>
                                        <option className="option" value="Digri">Digri</option>
                                        <option className="option" value="Dina City|Dina">Dina</option>
                                        <option className="option" value="Dinga">Dinga</option>
                                        <option className="option" value="Diplo, Pakistan|Diplo">Diplo</option>
                                        <option className="option" value="Diwana">Diwana</option>
                                        <option className="option" value="Dokri">Dokri</option>
                                        <option className="option" value="Drosh">Drosh</option>
                                        <option className="option" value="Duki">Duki</option>
                                        <option className="option" value="Dushi">Dushi</option>
                                        <option className="option" value="Duzab">Duzab</option>
                                        <option className="option" value="Faisalabad">Faisalabad</option>
                                        <option className="option" value="Fateh Jang">Fateh Jang</option>
                                        <option className="option" value="Ghotki">Ghotki</option>
                                        <option className="option" value="Gwadar">Gwadar</option>
                                        <option className="option" value="Gujranwala">Gujranwala</option>
                                        <option className="option" value="Gujrat">Gujrat</option>
                                        <option className="option" value="Gadra">Gadra</option>
                                        <option className="option" value="Gajar">Gajar</option>
                                        <option className="option" value="Gandava">Gandava</option>
                                        <option className="option" value="Garhi Khairo">Garhi Khairo</option>
                                        <option className="option" value="Garruck">Garruck</option>
                                        <option className="option" value="Ghakhar Mandi">Ghakhar Mandi</option>
                                        <option className="option" value="Ghanian">Ghanian</option>
                                        <option className="option" value="Ghauspur">Ghauspur</option>
                                        <option className="option" value="Ghazluna">Ghazluna</option>
                                        <option className="option" value="Girdan">Girdan</option>
                                        <option className="option" value="Gulistan">Gulistan</option>
                                        <option className="option" value="Gwash">Gwash</option>
                                        <option className="option" value="Hyderabad">Hyderabad</option>
                                        <option className="option" value="Hala">Hala</option>
                                        <option className="option" value="Haripur">Haripur</option>
                                        <option className="option" value="Hab Chauki">Hab Chauki</option>
                                        <option className="option" value="Hafizabad">Hafizabad</option>
                                        <option className="option" value="Hameedabad">Hameedabad</option>
                                        <option className="option" value="Hangu">Hangu</option>
                                        <option className="option" value="Harnai">Harnai</option>
                                        <option className="option" value="Hasilpur">Hasilpur</option>
                                        <option className="option" value="Haveli Lakha">Haveli Lakha</option>
                                        <option className="option" value="Hinglaj">Hinglaj</option>
                                        <option className="option" value="Hoshab">Hoshab</option>
                                        <option className="option" value="Islamabad">Islamabad</option>
                                        <option className="option" value="Islamkot">Islamkot</option>
                                        <option className="option" value="Ispikan">Ispikan</option>
                                        <option className="option" value="Jacobabad">Jacobabad</option>
                                        <option className="option" value="Jamshoro">Jamshoro</option>
                                        <option className="option" value="Jhang">Jhang</option>
                                        <option className="option" value="Jhelum">Jhelum</option>
                                        <option className="option" value="Jamesabad">Jamesabad</option>
                                        <option className="option" value="Jampur">Jampur</option>
                                        <option className="option" value="Janghar">Janghar</option>
                                        <option className="option" value="Jati, Jati(Mughalbhin)">Jati</option>
                                        <option className="option" value="Jauharabad">Jauharabad</option>
                                        <option className="option" value="Jhal">Jhal</option>
                                        <option className="option" value="Jhal Jhao">Jhal Jhao</option>
                                        <option className="option" value="Jhatpat">Jhatpat</option>
                                        <option className="option" value="Jhudo">Jhudo</option>
                                        <option className="option" value="Jiwani">Jiwani</option>
                                        <option className="option" value="Jungshahi">Jungshahi</option>
                                        <option className="option" value="Karachi">Karachi</option>
                                        <option className="option" value="Kotri">Kotri</option>
                                        <option className="option" value="Kalam">Kalam</option>
                                        <option className="option" value="Kalandi">Kalandi</option>
                                        <option className="option" value="Kalat">Kalat</option>
                                        <option className="option" value="Kamalia">Kamalia</option>
                                        <option className="option" value="Kamararod">Kamararod</option>
                                        <option className="option" value="Kamber">Kamber</option>
                                        <option className="option" value="Kamokey">Kamokey</option>
                                        <option className="option" value="Kanak">Kanak</option>
                                        <option className="option" value="Kandi">Kandi</option>
                                        <option className="option" value="Kandiaro">Kandiaro</option>
                                        <option className="option" value="Kanpur">Kanpur</option>
                                        <option className="option" value="Kapip">Kapip</option>
                                        <option className="option" value="Kappar">Kappar</option>
                                        <option className="option" value="Karak City">Karak City</option>
                                        <option className="option" value="Karodi">Karodi</option>
                                        <option className="option" value="Kashmor">Kashmor</option>
                                        <option className="option" value="Kasur">Kasur</option>
                                        <option className="option" value="Katuri">Katuri</option>
                                        <option className="option" value="Keti Bandar">Keti Bandar</option>
                                        <option className="option" value="Khairpur">Khairpur</option>
                                        <option className="option" value="Khanaspur">Khanaspur</option>
                                        <option className="option" value="Khanewal">Khanewal</option>
                                        <option className="option" value="Kharan">Kharan</option>
                                        <option className="option" value="kharian">kharian</option>
                                        <option className="option" value="Khokhropur">Khokhropur</option>
                                        <option className="option" value="Khora">Khora</option>
                                        <option className="option" value="Khushab">Khushab</option>
                                        <option className="option" value="Khuzdar">Khuzdar</option>
                                        <option className="option" value="Kikki">Kikki</option>
                                        <option className="option" value="Klupro">Klupro</option>
                                        <option className="option" value="Kohan">Kohan</option>
                                        <option className="option" value="Kohat">Kohat</option>
                                        <option className="option" value="Kohistan">Kohistan</option>
                                        <option className="option" value="Kohlu">Kohlu</option>
                                        <option className="option" value="Korak">Korak</option>
                                        <option className="option" value="Korangi">Korangi</option>
                                        <option className="option" value="Kot Sarae">Kot Sarae</option>
                                        <option className="option" value="Kotli">Kotli</option>
                                        <option className="option" value="Lahore">Lahore</option>
                                        <option className="option" value="Larkana">Larkana</option>
                                        <option className="option" value="Lahri">Lahri</option>
                                        <option className="option" value="Lakki Marwat">Lakki Marwat</option>
                                        <option className="option" value="Lasbela">Lasbela</option>
                                        <option className="option" value="Latamber">Latamber</option>
                                        <option className="option" value="Layyah">Layyah</option>
                                        <option className="option" value="Leiah">Leiah</option>
                                        <option className="option" value="Liari">Liari</option>
                                        <option className="option" value="Lodhran">Lodhran</option>
                                        <option className="option" value="Loralai">Loralai</option>
                                        <option className="option" value="Lower Dir">Lower Dir</option>
                                        <option className="option" value="Shadan Lund">Shadan Lund</option>
                                        <option className="option" value="Multan">Multan</option>
                                        <option className="option" value="Mandi Bahauddin">Mandi Bahauddin</option>
                                        <option className="option" value="Mansehra">Mansehra</option>
                                        <option className="option" value="Mian Chanu">Mian Chanu</option>
                                        <option className="option" value="Mirpur">Mirpur</option>
                                        <option className="option" value="Moro, Pakistan|Moro">Moro</option>
                                        <option className="option" value="Mardan">Mardan</option>
                                        <option className="option" value="Mach">Mach</option>
                                        <option className="option" value="Madyan">Madyan</option>
                                        <option className="option" value="Malakand">Malakand</option>
                                        <option className="option" value="Mand">Mand</option>
                                        <option className="option" value="Manguchar">Manguchar</option>
                                        <option className="option" value="Mashki Chah">Mashki Chah</option>
                                        <option className="option" value="Maslti">Maslti</option>
                                        <option className="option" value="Mastuj">Mastuj</option>
                                        <option className="option" value="Mastung">Mastung</option>
                                        <option className="option" value="Mathi">Mathi</option>
                                        <option className="option" value="Matiari">Matiari</option>
                                        <option className="option" value="Mehar">Mehar</option>
                                        <option className="option" value="Mekhtar">Mekhtar</option>
                                        <option className="option" value="Merui">Merui</option>
                                        <option className="option" value="Mianwali">Mianwali</option>
                                        <option className="option" value="Mianez">Mianez</option>
                                        <option className="option" value="Mirpur Batoro">Mirpur Batoro</option>
                                        <option className="option" value="Mirpur Khas">Mirpur Khas</option>
                                        <option className="option" value="Mirpur Sakro">Mirpur Sakro</option>
                                        <option className="option" value="Mithi">Mithi</option>
                                        <option className="option" value="Mongora">Mongora</option>
                                        <option className="option" value="Murgha Kibzai">Murgha Kibzai</option>
                                        <option className="option" value="Muridke">Muridke</option>
                                        <option className="option" value="Musa Khel Bazar">Musa Khel Bazar</option>
                                        <option className="option" value="Muzaffar Garh">Muzaffar Garh</option>
                                        <option className="option" value="Muzaffarabad">Muzaffarabad</option>
                                        <option className="option" value="Nawabshah">Nawabshah</option>
                                        <option className="option" value="Nazimabad">Nazimabad</option>
                                        <option className="option" value="Nowshera">Nowshera</option>
                                        <option className="option" value="Nagar Parkar">Nagar Parkar</option>
                                        <option className="option" value="Nagha Kalat">Nagha Kalat</option>
                                        <option className="option" value="Nal">Nal</option>
                                        <option className="option" value="Naokot">Naokot</option>
                                        <option className="option" value="Nasirabad">Nasirabad</option>
                                        <option className="option" value="Nauroz Kalat">Nauroz Kalat</option>
                                        <option className="option" value="Naushara">Naushara</option>
                                        <option className="option" value="Nur Gamma">Nur Gamma</option>
                                        <option className="option" value="Nushki">Nushki</option>
                                        <option className="option" value="Nuttal">Nuttal</option>
                                        <option className="option" value="Okara">Okara</option>
                                        <option className="option" value="Ormara">Ormara</option>
                                        <option className="option" value="Peshawar">Peshawar</option>
                                        <option className="option" value="Panjgur">Panjgur</option>
                                        <option className="option" value="Pasni City">Pasni City</option>
                                        <option className="option" value="Paharpur">Paharpur</option>
                                        <option className="option" value="Palantuk">Palantuk</option>
                                        <option className="option" value="Pendoo">Pendoo</option>
                                        <option className="option" value="Piharak">Piharak</option>
                                        <option className="option" value="Pirmahal">Pirmahal</option>
                                        <option className="option" value="Pishin">Pishin</option>
                                        <option className="option" value="Plandri">Plandri</option>
                                        <option className="option" value="Pokran">Pokran</option>
                                        <option className="option" value="Pounch">Pounch</option>
                                        <option className="option" value="Quetta">Quetta</option>
                                        <option className="option" value="Qambar">Qambar</option>
                                        <option className="option" value="Qamruddin Karez">Qamruddin Karez</option>
                                        <option className="option" value="Qazi Ahmad">Qazi Ahmad</option>
                                        <option className="option" value="Qila Abdullah">Qila Abdullah</option>
                                        <option className="option" value="Qila Ladgasht">Qila Ladgasht</option>
                                        <option className="option" value="Qila Safed">Qila Safed</option>
                                        <option className="option" value="Qila Saifullah">Qila Saifullah</option>
                                        <option className="option" value="Rawalpindi">Rawalpindi</option>
                                        <option className="option" value="Rabwah">Rabwah</option>
                                        <option className="option" value="Rahim Yar Khan">Rahim Yar Khan</option>
                                        <option className="option" value="Rajan Pur">Rajan Pur</option>
                                        <option className="option" value="Rakhni">Rakhni</option>
                                        <option className="option" value="Ranipur">Ranipur</option>
                                        <option className="option" value="Ratodero">Ratodero</option>
                                        <option className="option" value="Rawalakot">Rawalakot</option>
                                        <option className="option" value="Renala Khurd">Renala Khurd</option>
                                        <option className="option" value="Robat Thana">Robat Thana</option>
                                        <option className="option" value="Rodkhan">Rodkhan</option>
                                        <option className="option" value="Rohri">Rohri</option>
                                        <option className="option" value="Sialkot">Sialkot</option>
                                        <option className="option" value="Sadiqabad">Sadiqabad</option>
                                        <option className="option" value="Safdar Abad- (Dhaban Singh)">Safdar Abad</option>
                                        <option className="option" value="Sahiwal">Sahiwal</option>
                                        <option className="option" value="Saidu Sharif">Saidu Sharif</option>
                                        <option className="option" value="Saindak">Saindak</option>
                                        <option className="option" value="Sakrand">Sakrand</option>
                                        <option className="option" value="Sanjawi">Sanjawi</option>
                                        <option className="option" value="Sargodha">Sargodha</option>
                                        <option className="option" value="Saruna">Saruna</option>
                                        <option className="option" value="Shabaz Kalat">Shabaz Kalat</option>
                                        <option className="option" value="Shadadkhot">Shadadkhot</option>
                                        <option className="option" value="Shahbandar">Shahbandar</option>
                                        <option className="option" value="Shahpur">Shahpur</option>
                                        <option className="option" value="Shahpur Chakar">Shahpur Chakar</option>
                                        <option className="option" value="Shakargarh">Shakargarh</option>
                                        <option className="option" value="Shangla">Shangla</option>
                                        <option className="option" value="Sharam Jogizai">Sharam Jogizai</option>
                                        <option className="option" value="Sheikhupura">Sheikhupura</option>
                                        <option className="option" value="Shikarpur">Shikarpur</option>
                                        <option className="option" value="Shingar">Shingar</option>
                                        <option className="option" value="Shorap">Shorap</option>
                                        <option className="option" value="Sibi">Sibi</option>
                                        <option className="option" value="Sohawa">Sohawa</option>
                                        <option className="option" value="Sonmiani">Sonmiani</option>
                                        <option className="option" value="Sooianwala">Sooianwala</option>
                                        <option className="option" value="Spezand">Spezand</option>
                                        <option className="option" value="Spintangi">Spintangi</option>
                                        <option className="option" value="Sui">Sui</option>
                                        <option className="option" value="Sujawal">Sujawal</option>
                                        <option className="option" value="Sukkur">Sukkur</option>
                                        <option className="option" value="Suntsar">Suntsar</option>
                                        <option className="option" value="Surab">Surab</option>
                                        <option className="option" value="Swabi">Swabi</option>
                                        <option className="option" value="Swat">Swat</option>
                                        <option className="option" value="Tando Adam">Tando Adam</option>
                                        <option className="option" value="Tando Bago">Tando Bago</option>
                                        <option className="option" value="Tangi">Tangi</option>
                                        <option className="option" value="Tank City">Tank City</option>
                                        <option className="option" value="Tar Ahamd Rind">Tar Ahamd Rind</option>
                                        <option className="option" value="Thalo">Thalo</option>
                                        <option className="option" value="Thatta">Thatta</option>
                                        <option className="option" value="Toba Tek Singh">Toba Tek Singh</option>
                                        <option className="option" value="Tordher">Tordher</option>
                                        <option className="option" value="Tujal">Tujal</option>
                                        <option className="option" value="Tump">Tump</option>
                                        <option className="option" value="Turbat">Turbat</option>
                                        <option className="option" value="Umarao">Umarao</option>
                                        <option className="option" value="Umarkot">Umarkot</option>
                                        <option className="option" value="Upper Dir">Upper Dir</option>
                                        <option className="option" value="Uthal">Uthal</option>
                                        <option className="option" value="Vehari">Vehari</option>
                                        <option className="option" value="Veirwaro">Veirwaro</option>
                                        <option className="option" value="Vitakri">Vitakri</option>
                                        <option className="option" value="Wadh">Wadh</option>
                                        <option className="option" value="Wah Cantt">Wah Cantt</option>
                                        <option className="option" value="Warah">Warah</option>
                                        <option className="option" value="Washap">Washap</option>
                                        <option className="option" value="Wasjuk">Wasjuk</option>
                                        <option className="option" value="Wazirabad">Wazirabad</option>
                                        <option className="option" value="Yakmach">Yakmach</option>
                                        <option className="option" value="Zhob">Zhob</option>
                                        <option className="option" value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Details</span>
                                </div>
                                <textarea className="form-control" aria-label="With textarea" id='itemDetails' required></textarea>
                            </div>

                            <button type="submit" className="btn btn-dark mt-3" id='sendBtn'>Post Ad</button>
                        </form>
                    </div>
            
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Postad);



// <input id="inputFileToLoad" type="file" onChange={this.encodeImageFileAsURL} />
//                         <div id="imgTest"></div>
                        // <div className="form-row mt-3">
                        //     <div className="form-group col-md-6">
                        //         <label htmlFor="condition">Ad Status</label>
                        //         <select class="custom-select" id='condition'>
                        //             <option value="waiting" defaultValue>Waiting For Buyer</option>
                        //             <option value="sold">Sold</option>
                        //         </select>
                        //     </div>
                        // </div>