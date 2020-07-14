import {Injectable} from '@angular/core';

export interface Contact {
    display: string;
    email: string;
    userName: string;
    mobileNumber: string;
    firstName: string;
    lastName: string;
    image?: string;
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public contacts: Contact[] = [
        {
            "display": "block",
            "email": "abdelmonem.salem.as@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "abd-elmonem",
            "lastName": "salem"
        },
        {
            "display": "block",
            "email": "ahmed-fx_2011@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "Adel"
        },
        {
            "display": "block",
            "email": "smartech.net@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "A-Rahman"
        },
        {
            "display": "block",
            "email": "farag@vizion.me",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "Farag"
        },
        {
            "display": "block",
            "email": "alfa_graphic@yahoo.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "gamal"
        },
        {
            "display": "block",
            "email": "ahmedhesham110@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "Hesham"
        },
        {
            "display": "block",
            "email": "ahmedcatl58@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "ibrahim"
        },
        {
            "display": "block",
            "email": "art_ahmed_kasem@yahoo.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "Kassem"
        },
        {
            "display": "block",
            "email": "ahmedcs2012@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "Mahmoud Kesha"
        },
        {
            "display": "block",
            "email": "ahmedam_am2010@yahoo.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "Mohsen"
        },
        {
            "display": "block",
            "email": "Ahmedwaheed2008@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Ahmed",
            "lastName": "Waheed"
        },
        {
            "display": "block",
            "email": "training@almotahidaeducation.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Almotahida",
            "lastName": "For Training"
        },
        {
            "display": "block",
            "email": "amal_reda@yahoo.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Amal",
            "lastName": "Reda"
        },
        {
            "display": "block",
            "email": "amgad_khattab@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Amgad",
            "lastName": "Khattab"
        },
        {
            "display": "block",
            "email": "amratefnada@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Amr",
            "lastName": "Alaswany"
        },
        {
            "display": "block",
            "email": "amr-ac@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Amr",
            "lastName": "Mohsen"
        },
        {
            "display": "block",
            "email": "amr.reda151@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Amr",
            "lastName": "Reda"
        },
        {
            "display": "block",
            "email": "amr.sallam@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Amr",
            "lastName": "Sallam"
        },
        {
            "display": "rFZNBuIWoBMn3bES",
            "email": null,
            "userName": "arfmlive",
            "image": "https://api.vapulus.com:81/profile/fe7ee8fc1959cc7214fa21c4840dff0a.jpg",
            "mobileNumber": "2001016666903",
            "firstName": "AR Elsharawy",
            "lastName": null
        },
        {
            "display": "block",
            "email": "asmaa@ooopay.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "asmaa",
            "lastName": "mohamed"
        },
        {
            "display": "block",
            "email": "asmaa.nawar@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Asmaa",
            "lastName": "Ragheb Nawar"
        },
        {
            "display": "block",
            "email": "bishoybasily@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Bishoy",
            "lastName": "Basily"
        },
        {
            "display": "block",
            "email": "bishoy.nabil.fikry@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Bishoy",
            "lastName": "Nabil"
        },
        {
            "display": "block",
            "email": "daliaessa.1992@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "dalia",
            "lastName": "essa"
        },
        {
            "display": "block",
            "email": "dina.elcg@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "dina",
            "lastName": "omar"
        },
        {
            "display": "block",
            "email": "eman.elnouby.mohammed@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Eman",
            "lastName": "ElNouby"
        },
        {
            "display": "block",
            "email": "sms.shokry.mohamed@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Eng Shokry",
            "lastName": "Mohamed"
        },
        {
            "display": "block",
            "email": "esraa.allam@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Esraa",
            "lastName": "Allam"
        },
        {
            "display": "block",
            "email": "fatima.m.samy@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "fatima",
            "lastName": "samy"
        },
        {
            "display": "block",
            "email": "fawzywassel@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Fawzy",
            "lastName": "Wassel"
        },
        {
            "display": "block",
            "email": "E-mail Address",
            "userName": null,
            "mobileNumber": null,
            "firstName": "First Name",
            "lastName": "Last Name"
        },
        {
            "display": "block",
            "email": "Hesham_ahmed_2d@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "hesham",
            "lastName": "ahmed"
        },
        {
            "display": "block",
            "email": "ibrahim.sorady@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "ibrahim",
            "lastName": "elsorady"
        },
        {
            "display": "4PQbYBWHcjgZgHW3",
            "email": "islamegy@yahoo.com",
            "userName": "islamegy",
            "image": "https://api.vapulus.com:81/profile/3a835d3215755c435ef4fe9965a3f2a0.jpg",
            "mobileNumber": "201003343965",
            "firstName": "islam",
            "lastName": "egy"
        },
        {
            "display": "block",
            "email": "maged@a-designs.net",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Maged",
            "lastName": "Saeed"
        },
        {
            "display": "block",
            "email": "mariam.ishak22@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mariam",
            "lastName": "Ishak"
        },
        {
            "display": "block",
            "email": "mariammagdy10@yahoo.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mariam",
            "lastName": "Magdy"
        },
        {
            "display": "block",
            "email": "marwaalbeshry@yahoo.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Marwa",
            "lastName": "El Beshry"
        },
        {
            "display": "block",
            "email": "mazenzbib@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mazen",
            "lastName": "Zbib"
        },
        {
            "display": "block",
            "email": "mennasinousy@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Menna",
            "lastName": "Sinousy"
        },
        {
            "display": "HnPISGf7pOjmPp7W",
            "email": "moamen@ooopay.com",
            "userName": "moamen",
            "image": "https://api.vapulus.com:81/profile/8f14e45fceea167a5a36dedd4bea2543.jpg",
            "mobileNumber": "117077352170",
            "firstName": "moameny",
            "lastName": "yousef"
        },
        {
            "display": "block",
            "email": "mohamed.aboelmagd7@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mohamed",
            "lastName": "Abo Elmagd"
        },
        {
            "display": "block",
            "email": "ENG.HADIDY@GMAIL.COM",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mohamed",
            "lastName": "Hadidy"
        },
        {
            "display": "block",
            "email": "almya_group@yahoo.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mohamed",
            "lastName": "Neseem"
        },
        {
            "display": "block",
            "email": "mohamedrefatmohamed@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mohamed",
            "lastName": "Refaat"
        },
        {
            "display": "block",
            "email": "mohamedeldesoky2013@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mohamed Adel",
            "lastName": "El-Desoky"
        },
        {
            "display": "block",
            "email": "shell__87@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mohammed",
            "lastName": "Shell"
        },
        {
            "display": "block",
            "email": "mohgamohyiemohamed@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mohga",
            "lastName": "Ali"
        },
        {
            "display": "block",
            "email": "mostafayoussefdesign@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Mostafa Youssef",
            "lastName": "Ismael"
        },
        {
            "display": "block",
            "email": "m.sabri.m@live.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Muhammad",
            "lastName": "Sabri"
        },
        {
            "display": "block",
            "email": "nadawoud@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Nada",
            "lastName": "Yahia Dawoud"
        },
        {
            "display": "block",
            "email": "4jan25@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Nasser",
            "lastName": "Abdel Wahab PMP�"
        },
        {
            "display": "block",
            "email": "n_ismail2005@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Nesma",
            "lastName": "Ismail"
        },
        {
            "display": "AQOroNB6y17bRZAr",
            "email": "nour@ooopay.com",
            "userName": "nour",
            "image": "https://api.vapulus.com:81/profile/d1f491a404d6854880943e5c3cd9ca25.JPG",
            "mobileNumber": "2001140586879",
            "firstName": "nour",
            "lastName": "ahmed"
        },
        {
            "display": "block",
            "email": "egyptsunset@windowslive.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Rasha",
            "lastName": "Hamid"
        },
        {
            "display": "block",
            "email": "Romany1st@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Romany",
            "lastName": "Saad"
        },
        {
            "display": "K2wHAVAVwtAKXn36",
            "email": "sarah-moharam@hotmail.com",
            "userName": "Sarah",
            "image": "https://api.vapulus.com:81/profile/4daa3db355ef2b0e64b472968cb70f0d.jpg",
            "mobileNumber": "2001001798273",
            "firstName": "Sarah",
            "lastName": "Moharam"
        },
        {
            "display": "block",
            "email": "engsarah_fci@yahoo.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Sarah",
            "lastName": "saad"
        },
        {
            "display": "block",
            "email": "AL-IDRISS@OUTLOOK.COM",
            "userName": null,
            "mobileNumber": null,
            "firstName": "SULTAN",
            "lastName": "AL-IDRISS"
        },
        {
            "display": "block",
            "email": "toqa_hagag@hotmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Toqa",
            "lastName": "Hagag"
        },
        {
            "display": "block",
            "email": "utkh.bhrg@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Utkarsh",
            "lastName": "Bhargava"
        },
        {
            "display": "block",
            "email": "w.hammad@live.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Walid",
            "lastName": "Hammad"
        },
        {
            "display": "block",
            "email": "eng.wegdan200@gmail.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Wegdan",
            "lastName": "Tawfik"
        },
        {
            "display": "block",
            "email": "yahia.ali@motahidagroup.com",
            "userName": null,
            "mobileNumber": null,
            "firstName": "Yahia",
            "lastName": "Ali"
        },
        {
            "display": "block",
            "email": null,
            "userName": null,
            "mobileNumber": null,
            "firstName": null,
            "lastName": null
        }
    ];
    public recentContacts = [
        {
            "contactId": "nHKnF54asnurEqdv",
            "email": "moaaz@vapulus.com",
            "firstName": "moaaz",
            "lastName": "yousef ",
            "mobileNumber": "117752107086",
            "image": "https://api.vapulus.com:81/profile/02a32ad2669e6fe298e607fe7cc0e1a0.jpg",
            "created_ts": "2017-05-08T12:36:11.000Z"
        },
        {
            "contactId": "nHKnF54asnurEqdv",
            "email": "moaaz@vapulus.com",
            "firstName": "moaaz",
            "lastName": "yousef ",
            "mobileNumber": "117752107086",
            "image": "https://api.vapulus.com:81/profile/02a32ad2669e6fe298e607fe7cc0e1a0.jpg",
            "created_ts": "2017-05-08T12:01:15.000Z"
        },
        {
            "contactId": "nHKnF54asnurEqdv",
            "email": "moaaz@vapulus.com",
            "firstName": "moaaz",
            "lastName": "yousef ",
            "mobileNumber": "117752107086",
            "image": "https://api.vapulus.com:81/profile/02a32ad2669e6fe298e607fe7cc0e1a0.jpg",
            "created_ts": "2017-05-08T12:01:13.000Z"
        },
        {
            "contactId": "rFZNBuIWoBMn3bES",
            "email": "ar.sharawi@hotmail.com",
            "firstName": "Abdelrahman",
            "lastName": "Elsharawy",
            "mobileNumber": "2001016666903",
            "image": "https://api.vapulus.com:81/profile/fe7ee8fc1959cc7214fa21c4840dff0a.jpg",
            "created_ts": "2017-05-03T13:53:01.000Z"
        },
        {
            "contactId": "HnPISGf7pOjmPp7W",
            "email": "moamen@ooopay.com",
            "firstName": "moamen",
            "lastName": "yousef",
            "mobileNumber": "117077352170",
            "image": "https://api.vapulus.com:81/profile/8f14e45fceea167a5a36dedd4bea2543.jpg",
            "created_ts": "2017-04-18T10:31:13.000Z"
        }
    ];

    constructor() {
    }

    public getContacts(): Contact[] {
        return this.contacts.map(item => {
            return {
                ...item,
                group: item.firstName ? ((item.firstName).substr(0, 1)).toUpperCase() : '#'
            }
        })
    }

    public addContact(contact) {
        return new Promise((resolve, reject) => {
            this.contacts.unshift(contact)
            resolve();
        })
    }

    public getRecentContacts() {
        return this.recentContacts;
    }

}
