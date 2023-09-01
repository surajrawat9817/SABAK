import React, { useState } from 'react';
import { signupUser } from '../api';
import "./Signup.css"
function SignupForm() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [IsError, setIsError] = useState(false);
    const [Error, setError] = useState('');
    const [FirstName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const [EmailAddress,setEmail] = useState("");
    const [Gender,setGender] = useState("");
    const [Dob,setDob] = useState("");
    const [AddharCardNumber,setAddharCardNumber] = useState("");
    const [PanCardNumber,setPanCardNumber] =useState(null)
    const [PhoneNumber,setPhoneNumber] =useState(null);
    const [UserName,setUserName] =useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hello");
        

        try {
            const response = await signupUser({Password,EmailAddress,UserName,Dob,Gender,FirstName,LastName,AddharCardNumber,PhoneNumber,PanCardNumber});

            if (response.success) {
                // Successful signup logic
            } else {
                setError(response.message);
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
        return 1;
    };

    return (
       
         <div className="containerWrapper mx-auto my-5 px-1 py-1">
         <div className="leftContainer">
           
           <div className="avatarContainer">
             <svg className="avatar" width="372" height="404" viewBox="0 0 372 404" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M155.575 44.298C149.981 37.732 146.195 29.6851 146.828 20.6684C148.651 -5.31115 184.815 0.404026 191.85 13.5163C198.885 26.6286 198.049 59.8889 188.957 62.2325C185.331 63.167 177.607 60.8777 169.746 56.1393L174.68 91.048H145.545L155.575 44.298Z" fill="#B28B67" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M164.64 30.1879C163.688 29.5331 162.549 29.1353 161.326 29.1353C157.974 29.1353 155.257 32.1247 155.257 35.2052C155.257 38.41 156.77 40.8879 158.931 41.9391C157.777 44.1958 156.616 45.8335 155.257 46.131C150.01 45.6002 143.117 32.5594 143.117 21.8515C143.117 10.1312 152.443 0 169.824 0C185.447 0 191.371 6.4416 191.676 12.1397C184.981 13.9796 173.283 14.6881 156.471 14.5677V15.7816L171.038 16.9956L173.466 24.2795C169.603 23.9911 166.843 26.6406 164.64 30.1879Z" fill="#191847" />
               <path d="M133.405 403.039C185.03 403.039 226.881 363.091 226.881 313.812C226.881 264.533 185.03 224.585 133.405 224.585C81.7797 224.585 39.9291 264.533 39.9291 313.812C39.9291 363.091 81.7797 403.039 133.405 403.039Z" fill="#C5CFD6" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M310.049 389.272C294.495 354.846 283.246 324.869 278.731 309.053C271 281.973 265.118 258.143 263.632 249.244C260.087 228.023 290.9 226.788 294.973 237.334C301.137 253.296 311.899 305.742 324.83 384.96L310.049 389.272ZM129.627 281.233C143.899 275.592 193.875 257.939 217.979 252.945C224.906 251.51 231.619 250.177 237.931 248.972C256.691 245.39 266.411 279.235 248.342 281.835C203.344 288.312 139.551 294.999 134.092 295.75C126.44 296.802 120.659 284.778 129.627 281.233Z" fill="#B28B67" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M249.445 239.658L172.252 200.362V191.808H181.432C256.113 210.838 294.275 223.033 295.918 228.394C295.936 228.452 295.952 228.51 295.967 228.568C296.004 228.617 296.041 228.666 296.077 228.716C310.878 249.071 319.741 348.443 322.65 355.884L294.29 360.115C283.441 319.886 248.732 291.861 249.654 243.68C249.405 242.266 249.343 240.926 249.445 239.658Z" fill="#1F28CF" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M178.666 262.996C171.603 261.582 165.098 260.32 159.533 259.344C123.583 253.038 113.1 233.795 119.298 191.808H185.535C196.355 194.916 252.586 218.497 281.76 231.039C301.07 239.34 294.983 269.265 284.048 277.052C283.989 277.53 283.792 277.855 283.441 278C224.619 302.38 178.085 289.588 162.54 293.675L155.35 270.993L178.666 262.996Z" fill="#2B44FF" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M134.507 277.628C130.653 277.997 127.917 278.575 126.299 279.365C124.332 280.324 121.621 282.052 118.165 284.549C119.279 286.832 129.284 307.345 148.181 346.09C154.248 345.11 156.652 342.795 155.393 339.144C154.134 335.493 153.119 332.445 152.347 330L151.147 295.177C151.124 294.507 150.562 293.983 149.892 294.006C149.881 294.006 149.869 294.007 149.858 294.007L144.501 294.344C141.457 291.88 139.449 289.651 138.476 287.657C137.686 286.037 137.249 283.48 137.165 279.987L137.165 279.987C137.133 278.646 136.021 277.586 134.68 277.618C134.622 277.619 134.565 277.623 134.507 277.628Z" fill="#E4E4E4" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M302.97 382.889C301.612 386.515 300.933 389.228 300.933 391.028C300.933 393.217 301.298 396.411 302.027 400.611C304.567 400.611 327.39 400.611 370.498 400.611C372.277 394.729 371.25 391.553 367.416 391.084C363.583 390.615 360.398 390.192 357.863 389.814L326.038 375.626C325.426 375.353 324.708 375.628 324.435 376.241C324.43 376.251 324.426 376.262 324.422 376.272L322.376 381.234C318.827 382.89 315.943 383.718 313.724 383.718C311.922 383.718 309.432 382.99 306.256 381.534L306.256 381.534C305.037 380.975 303.596 381.51 303.037 382.729C303.013 382.782 302.991 382.835 302.97 382.889Z" fill="#E4E4E4" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M244.956 167.688L283.68 196.124C294.183 198.958 302.957 202.483 310.004 206.701C311.668 208.218 313.68 211.29 306.777 210.759C299.874 210.228 292.589 209.98 291.636 212.335C290.684 214.689 294.861 217.505 292.936 220.682C291.652 222.8 285.588 217.489 274.743 204.75L236.396 188.849L244.956 167.688ZM69.719 155.844L91.0985 159.715C66.2849 208.955 52.9946 234.99 51.2279 237.82C47.2526 244.188 51.2656 255.662 52.7796 261.714C43.9827 263.925 47.234 250.566 36.1047 253.538C25.9465 256.25 17.4095 262.905 7.74295 254.3C6.55451 253.242 5.63946 249.886 9.59711 248.087C19.4571 243.607 33.9946 235.286 36.32 232.113C39.4912 227.786 50.6242 202.363 69.719 155.844Z" fill="#B28B67" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M253.977 170.779C258.96 170.421 264.379 171.247 270.189 173.205C273.049 174.168 274.585 177.267 273.622 180.126C273.063 181.786 271.783 183.001 270.248 183.539C271.36 184.35 272.481 185.156 273.613 185.958L263.844 205.901C222.735 185.405 184.097 169.951 166.49 136.113C160.581 124.755 162.581 86.1778 162.017 72.1435L175.001 66.8188C193.099 104.23 217.593 140.121 253.977 170.779Z" fill="#69A1AC" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M116.409 202.624C154.575 206.817 184.615 206.817 206.53 202.624C209.245 202.104 209.126 190.4 207.867 187.203C188.259 137.424 175.36 100.983 175.36 66.4075C171.762 68.2869 165.466 68.5685 156.47 67.2525C132.296 102.884 121.183 143.767 116.409 202.624Z" fill="#191847" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M109.318 208.509C108.022 207.29 107.346 205.462 107.678 203.578L108.311 199.992C108.739 197.561 110.713 195.791 113.044 195.514C113.451 193.693 113.803 191.884 114.093 190.088C116.543 174.918 112.356 160.043 112.553 145.437C93.0321 162.092 75.5204 190.85 60.0178 231.712L37.0897 224.966C37.9646 221.715 38.8707 218.505 39.8083 215.335C37.1619 213.832 34.0696 206.941 36.2951 205.788C38.5936 204.597 41.0285 203.759 43.5928 203.266C64.6156 139.946 98.9944 93.6374 146.729 64.3406H150.952L160.535 64.3406C156.47 118.096 212.616 235.456 193.121 335.686C157.087 343.733 105.644 318.696 55.5684 338.698C57.4317 298.335 94.7559 250.917 109.318 208.509Z" fill="#89C5CC" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M151.743 65.5545L145.48 84.8148L158.092 99.2533L146.694 110.6L174.27 157.816L140.548 110.694L151.743 99.2533L140.548 86.4937L151.743 65.5545Z" fill="black" fill-opacity="0.1" />
               <path fill-rule="evenodd" clip-rule="evenodd" d="M166.182 176.026C163.5 176.026 161.326 173.852 161.326 171.17C161.326 168.488 163.5 166.314 166.182 166.314C168.864 166.314 171.038 168.488 171.038 171.17C171.038 173.852 168.864 176.026 166.182 176.026ZM172.252 203.947C169.57 203.947 167.396 201.773 167.396 199.092C167.396 196.41 169.57 194.236 172.252 194.236C174.934 194.236 177.108 196.41 177.108 199.092C177.108 201.773 174.934 203.947 172.252 203.947ZM173.466 231.869C170.784 231.869 168.61 229.695 168.61 227.013C168.61 224.331 170.784 222.157 173.466 222.157C176.148 222.157 178.322 224.331 178.322 227.013C178.322 229.695 176.148 231.869 173.466 231.869Z" fill="black" fill-opacity="0.4" />
             </svg>
           </div>
         </div>
         <div className="rightContainer">
           <div className="logoContainer">
             <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M37.982 0.502319L0.956421 37.6796L37.982 75.2883L75.8332 37.3843L37.982 0.502319ZM39.3601 4.95338L71.8899 36.9L46.756 30.1216L39.3601 4.95338ZM5.95466 35.5248L24.61 24.487L36.4439 4.94179L5.95466 35.5248ZM31.2637 46.2329L49.9628 51.1288L37.9912 71.2579L31.2637 46.2329ZM36.944 71.21L5.74351 39.5509L30.1511 45.9416L36.944 71.21ZM37.3952 72.8883L37.2841 72.9995L37.4253 72.9999L37.3952 72.8883ZM71.848 37.7613L52.1081 49.0171L47.086 31.211L71.848 37.7613ZM44.8434 30.6178L50.0598 49.1129L30.6733 44.0369L25.7049 25.5551L44.8434 30.6178ZM68.6665 41.9309L41.942 68.5742L52.0082 51.5235L68.6665 41.9309ZM4.70295 37.2486L29.5758 43.7599L24.7462 25.5861L4.70295 37.2486ZM44.5736 29.5407L37.5695 4.83618L25.7646 24.5515L44.5736 29.5407Z" fill="url(#paint0_linear_105_113)" />
               <defs>
                 <linearGradient id="paint0_linear_105_113" x1="-3.48845" y1="30.7806" x2="31.6738" y2="78.0774" gradientUnits="userSpaceOnUse">
                   <stop stop-color="#2DF3AE" />
                   <stop offset="1" stop-color="#0CCBEC" />
                 </linearGradient>
               </defs>
             </svg>
             <h2>SABAK</h2>
           </div>
           <div className="signUpContainer">
             <h3>Create Account</h3>
             <form onSubmit={handleSubmit}>

                <div className="inputBox">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4396 14.7395C16.2358 13.7816 16.7895 12.6461 17.0539 11.429C17.3184 10.2118 17.2858 8.94891 16.959 7.74703C16.6321 6.54515 16.0206 5.43967 15.1761 4.52411C14.3317 3.60855 13.2791 2.90985 12.1075 2.48711C10.9359 2.06437 9.67973 1.93003 8.44523 2.09545C7.21073 2.26088 6.03423 2.72119 5.01525 3.43747C3.99628 4.15374 3.16481 5.1049 2.59118 6.21048C2.01755 7.31606 1.71864 8.54353 1.71973 9.78907C1.72015 11.5997 2.35821 13.3524 3.52196 14.7395L3.51087 14.7489C3.54968 14.7955 3.59403 14.8354 3.63394 14.8814C3.68383 14.9385 3.73761 14.9923 3.78916 15.0477C3.94438 15.2163 4.10404 15.3781 4.27146 15.53C4.32246 15.5766 4.37512 15.6198 4.42668 15.6642C4.60407 15.8172 4.78646 15.9624 4.9755 16.0977C4.99989 16.1143 5.02206 16.136 5.04646 16.1531V16.1465C6.34483 17.0602 7.89372 17.5505 9.48135 17.5505C11.069 17.5505 12.6179 17.0602 13.9162 16.1465V16.1531C13.9406 16.136 13.9623 16.1143 13.9872 16.0977C14.1757 15.9619 14.3586 15.8172 14.536 15.6642C14.5876 15.6198 14.6402 15.576 14.6912 15.53C14.8587 15.3776 15.0183 15.2163 15.1735 15.0477C15.2251 14.9923 15.2783 14.9385 15.3288 14.8814C15.3681 14.8354 15.413 14.7955 15.4518 14.7484L15.4396 14.7395ZM9.4808 5.35417C9.97419 5.35417 10.4565 5.50048 10.8667 5.77459C11.277 6.0487 11.5967 6.43831 11.7855 6.89415C11.9743 7.34998 12.0237 7.85157 11.9275 8.33548C11.8312 8.81939 11.5936 9.26389 11.2448 9.61277C10.8959 9.96165 10.4514 10.1992 9.96747 10.2955C9.48356 10.3918 8.98198 10.3423 8.52614 10.1535C8.07031 9.96472 7.6807 9.64498 7.40659 9.23474C7.13248 8.8245 6.98617 8.34219 6.98617 7.8488C6.98617 7.18718 7.24899 6.55266 7.71683 6.08483C8.18466 5.617 8.81918 5.35417 9.4808 5.35417ZM5.04978 14.7395C5.0594 14.0116 5.35521 13.3168 5.87321 12.8053C6.39121 12.2938 7.08975 12.0069 7.81771 12.0065H11.1439C11.8718 12.0069 12.5704 12.2938 13.0884 12.8053C13.6064 13.3168 13.9022 14.0116 13.9118 14.7395C12.696 15.8351 11.1174 16.4415 9.4808 16.4415C7.84418 16.4415 6.26559 15.8351 5.04978 14.7395Z" fill="#0B4654" fill-opacity="0.5" />
                </svg>
                <input type="text" className='w-100'   placeholder='First Name' value={FirstName} onChange={(e) => setFirstName(e.target.value)}  />
                </div>
                <div className="inputBox">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4396 14.7395C16.2358 13.7816 16.7895 12.6461 17.0539 11.429C17.3184 10.2118 17.2858 8.94891 16.959 7.74703C16.6321 6.54515 16.0206 5.43967 15.1761 4.52411C14.3317 3.60855 13.2791 2.90985 12.1075 2.48711C10.9359 2.06437 9.67973 1.93003 8.44523 2.09545C7.21073 2.26088 6.03423 2.72119 5.01525 3.43747C3.99628 4.15374 3.16481 5.1049 2.59118 6.21048C2.01755 7.31606 1.71864 8.54353 1.71973 9.78907C1.72015 11.5997 2.35821 13.3524 3.52196 14.7395L3.51087 14.7489C3.54968 14.7955 3.59403 14.8354 3.63394 14.8814C3.68383 14.9385 3.73761 14.9923 3.78916 15.0477C3.94438 15.2163 4.10404 15.3781 4.27146 15.53C4.32246 15.5766 4.37512 15.6198 4.42668 15.6642C4.60407 15.8172 4.78646 15.9624 4.9755 16.0977C4.99989 16.1143 5.02206 16.136 5.04646 16.1531V16.1465C6.34483 17.0602 7.89372 17.5505 9.48135 17.5505C11.069 17.5505 12.6179 17.0602 13.9162 16.1465V16.1531C13.9406 16.136 13.9623 16.1143 13.9872 16.0977C14.1757 15.9619 14.3586 15.8172 14.536 15.6642C14.5876 15.6198 14.6402 15.576 14.6912 15.53C14.8587 15.3776 15.0183 15.2163 15.1735 15.0477C15.2251 14.9923 15.2783 14.9385 15.3288 14.8814C15.3681 14.8354 15.413 14.7955 15.4518 14.7484L15.4396 14.7395ZM9.4808 5.35417C9.97419 5.35417 10.4565 5.50048 10.8667 5.77459C11.277 6.0487 11.5967 6.43831 11.7855 6.89415C11.9743 7.34998 12.0237 7.85157 11.9275 8.33548C11.8312 8.81939 11.5936 9.26389 11.2448 9.61277C10.8959 9.96165 10.4514 10.1992 9.96747 10.2955C9.48356 10.3918 8.98198 10.3423 8.52614 10.1535C8.07031 9.96472 7.6807 9.64498 7.40659 9.23474C7.13248 8.8245 6.98617 8.34219 6.98617 7.8488C6.98617 7.18718 7.24899 6.55266 7.71683 6.08483C8.18466 5.617 8.81918 5.35417 9.4808 5.35417ZM5.04978 14.7395C5.0594 14.0116 5.35521 13.3168 5.87321 12.8053C6.39121 12.2938 7.08975 12.0069 7.81771 12.0065H11.1439C11.8718 12.0069 12.5704 12.2938 13.0884 12.8053C13.6064 13.3168 13.9022 14.0116 13.9118 14.7395C12.696 15.8351 11.1174 16.4415 9.4808 16.4415C7.84418 16.4415 6.26559 15.8351 5.04978 14.7395Z" fill="#0B4654" fill-opacity="0.5" />
                </svg>
                <input type="text" className='w-100'  placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)}  />
                </div>
                <div className="inputBox">
                <svg width="30" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.48037 1.49257C5.40026 1.49257 2.08887 4.80395 2.08887 8.88406C2.08887 12.9642 5.40026 16.2756 9.48037 16.2756H13.1761V14.7973H9.48037C6.27246 14.7973 3.56717 12.092 3.56717 8.88406C3.56717 5.67615 6.27246 2.97086 9.48037 2.97086C12.6883 2.97086 15.3936 5.67615 15.3936 8.88406V9.94104C15.3936 10.525 14.8688 11.1015 14.2848 11.1015C13.7009 11.1015 13.1761 10.525 13.1761 9.94104V8.88406C13.1761 6.84401 11.5204 5.18831 9.48037 5.18831C7.44032 5.18831 5.78462 6.84401 5.78462 8.88406C5.78462 10.9241 7.44032 12.5798 9.48037 12.5798C10.5004 12.5798 11.4317 12.1659 12.097 11.4933C12.5774 12.1511 13.4053 12.5798 14.2848 12.5798C15.741 12.5798 16.8719 11.3972 16.8719 9.94104V8.88406C16.8719 4.80395 13.5605 1.49257 9.48037 1.49257ZM9.48037 11.1015C8.25338 11.1015 7.26292 10.111 7.26292 8.88406C7.26292 7.65707 8.25338 6.66661 9.48037 6.66661C10.7074 6.66661 11.6978 7.65707 11.6978 8.88406C11.6978 10.111 10.7074 11.1015 9.48037 11.1015Z" fill="#0B4654" fill-opacity="0.5" />
                </svg>
                <input className='w-100' type="text" placeholder="Username" value={UserName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="inputBox">
                <svg width="30" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.48037 1.49257C5.40026 1.49257 2.08887 4.80395 2.08887 8.88406C2.08887 12.9642 5.40026 16.2756 9.48037 16.2756H13.1761V14.7973H9.48037C6.27246 14.7973 3.56717 12.092 3.56717 8.88406C3.56717 5.67615 6.27246 2.97086 9.48037 2.97086C12.6883 2.97086 15.3936 5.67615 15.3936 8.88406V9.94104C15.3936 10.525 14.8688 11.1015 14.2848 11.1015C13.7009 11.1015 13.1761 10.525 13.1761 9.94104V8.88406C13.1761 6.84401 11.5204 5.18831 9.48037 5.18831C7.44032 5.18831 5.78462 6.84401 5.78462 8.88406C5.78462 10.9241 7.44032 12.5798 9.48037 12.5798C10.5004 12.5798 11.4317 12.1659 12.097 11.4933C12.5774 12.1511 13.4053 12.5798 14.2848 12.5798C15.741 12.5798 16.8719 11.3972 16.8719 9.94104V8.88406C16.8719 4.80395 13.5605 1.49257 9.48037 1.49257ZM9.48037 11.1015C8.25338 11.1015 7.26292 10.111 7.26292 8.88406C7.26292 7.65707 8.25338 6.66661 9.48037 6.66661C10.7074 6.66661 11.6978 7.65707 11.6978 8.88406C11.6978 10.111 10.7074 11.1015 9.48037 11.1015Z" fill="#0B4654" fill-opacity="0.5" />
                </svg>
                <input className='w-100' type="text" placeholder="Email address" value={EmailAddress} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputBox">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4396 14.7395C16.2358 13.7816 16.7895 12.6461 17.0539 11.429C17.3184 10.2118 17.2858 8.94891 16.959 7.74703C16.6321 6.54515 16.0206 5.43967 15.1761 4.52411C14.3317 3.60855 13.2791 2.90985 12.1075 2.48711C10.9359 2.06437 9.67973 1.93003 8.44523 2.09545C7.21073 2.26088 6.03423 2.72119 5.01525 3.43747C3.99628 4.15374 3.16481 5.1049 2.59118 6.21048C2.01755 7.31606 1.71864 8.54353 1.71973 9.78907C1.72015 11.5997 2.35821 13.3524 3.52196 14.7395L3.51087 14.7489C3.54968 14.7955 3.59403 14.8354 3.63394 14.8814C3.68383 14.9385 3.73761 14.9923 3.78916 15.0477C3.94438 15.2163 4.10404 15.3781 4.27146 15.53C4.32246 15.5766 4.37512 15.6198 4.42668 15.6642C4.60407 15.8172 4.78646 15.9624 4.9755 16.0977C4.99989 16.1143 5.02206 16.136 5.04646 16.1531V16.1465C6.34483 17.0602 7.89372 17.5505 9.48135 17.5505C11.069 17.5505 12.6179 17.0602 13.9162 16.1465V16.1531C13.9406 16.136 13.9623 16.1143 13.9872 16.0977C14.1757 15.9619 14.3586 15.8172 14.536 15.6642C14.5876 15.6198 14.6402 15.576 14.6912 15.53C14.8587 15.3776 15.0183 15.2163 15.1735 15.0477C15.2251 14.9923 15.2783 14.9385 15.3288 14.8814C15.3681 14.8354 15.413 14.7955 15.4518 14.7484L15.4396 14.7395ZM9.4808 5.35417C9.97419 5.35417 10.4565 5.50048 10.8667 5.77459C11.277 6.0487 11.5967 6.43831 11.7855 6.89415C11.9743 7.34998 12.0237 7.85157 11.9275 8.33548C11.8312 8.81939 11.5936 9.26389 11.2448 9.61277C10.8959 9.96165 10.4514 10.1992 9.96747 10.2955C9.48356 10.3918 8.98198 10.3423 8.52614 10.1535C8.07031 9.96472 7.6807 9.64498 7.40659 9.23474C7.13248 8.8245 6.98617 8.34219 6.98617 7.8488C6.98617 7.18718 7.24899 6.55266 7.71683 6.08483C8.18466 5.617 8.81918 5.35417 9.4808 5.35417ZM5.04978 14.7395C5.0594 14.0116 5.35521 13.3168 5.87321 12.8053C6.39121 12.2938 7.08975 12.0069 7.81771 12.0065H11.1439C11.8718 12.0069 12.5704 12.2938 13.0884 12.8053C13.6064 13.3168 13.9022 14.0116 13.9118 14.7395C12.696 15.8351 11.1174 16.4415 9.4808 16.4415C7.84418 16.4415 6.26559 15.8351 5.04978 14.7395Z" fill="#0B4654" fill-opacity="0.5" />
                </svg>
                <input type="date" className='w-50'   value={Dob} onChange={(e) => setDob(e.target.value)} />
                {/* <input type="text" className='w-25 px-2' placeholder="Gender" value={Gender} onChange={(e) => setGender(e.target.value)}  /> */}
                <select id="gender" name="gender" className='text-secondary mx-2' value={Gender} onChange ={(e) =>setGender(e.target.value)}>
        
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
                  </div>
                <div className="inputBox">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4396 14.7395C16.2358 13.7816 16.7895 12.6461 17.0539 11.429C17.3184 10.2118 17.2858 8.94891 16.959 7.74703C16.6321 6.54515 16.0206 5.43967 15.1761 4.52411C14.3317 3.60855 13.2791 2.90985 12.1075 2.48711C10.9359 2.06437 9.67973 1.93003 8.44523 2.09545C7.21073 2.26088 6.03423 2.72119 5.01525 3.43747C3.99628 4.15374 3.16481 5.1049 2.59118 6.21048C2.01755 7.31606 1.71864 8.54353 1.71973 9.78907C1.72015 11.5997 2.35821 13.3524 3.52196 14.7395L3.51087 14.7489C3.54968 14.7955 3.59403 14.8354 3.63394 14.8814C3.68383 14.9385 3.73761 14.9923 3.78916 15.0477C3.94438 15.2163 4.10404 15.3781 4.27146 15.53C4.32246 15.5766 4.37512 15.6198 4.42668 15.6642C4.60407 15.8172 4.78646 15.9624 4.9755 16.0977C4.99989 16.1143 5.02206 16.136 5.04646 16.1531V16.1465C6.34483 17.0602 7.89372 17.5505 9.48135 17.5505C11.069 17.5505 12.6179 17.0602 13.9162 16.1465V16.1531C13.9406 16.136 13.9623 16.1143 13.9872 16.0977C14.1757 15.9619 14.3586 15.8172 14.536 15.6642C14.5876 15.6198 14.6402 15.576 14.6912 15.53C14.8587 15.3776 15.0183 15.2163 15.1735 15.0477C15.2251 14.9923 15.2783 14.9385 15.3288 14.8814C15.3681 14.8354 15.413 14.7955 15.4518 14.7484L15.4396 14.7395ZM9.4808 5.35417C9.97419 5.35417 10.4565 5.50048 10.8667 5.77459C11.277 6.0487 11.5967 6.43831 11.7855 6.89415C11.9743 7.34998 12.0237 7.85157 11.9275 8.33548C11.8312 8.81939 11.5936 9.26389 11.2448 9.61277C10.8959 9.96165 10.4514 10.1992 9.96747 10.2955C9.48356 10.3918 8.98198 10.3423 8.52614 10.1535C8.07031 9.96472 7.6807 9.64498 7.40659 9.23474C7.13248 8.8245 6.98617 8.34219 6.98617 7.8488C6.98617 7.18718 7.24899 6.55266 7.71683 6.08483C8.18466 5.617 8.81918 5.35417 9.4808 5.35417ZM5.04978 14.7395C5.0594 14.0116 5.35521 13.3168 5.87321 12.8053C6.39121 12.2938 7.08975 12.0069 7.81771 12.0065H11.1439C11.8718 12.0069 12.5704 12.2938 13.0884 12.8053C13.6064 13.3168 13.9022 14.0116 13.9118 14.7395C12.696 15.8351 11.1174 16.4415 9.4808 16.4415C7.84418 16.4415 6.26559 15.8351 5.04978 14.7395Z" fill="#0B4654" fill-opacity="0.5" />
                </svg>
                <input type="number" className='w-100'  placeholder="Adhaar Number" value={AddharCardNumber} onChange={(e) => setAddharCardNumber(e.target.value)} />
                </div>
                <div className="inputBox">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4396 14.7395C16.2358 13.7816 16.7895 12.6461 17.0539 11.429C17.3184 10.2118 17.2858 8.94891 16.959 7.74703C16.6321 6.54515 16.0206 5.43967 15.1761 4.52411C14.3317 3.60855 13.2791 2.90985 12.1075 2.48711C10.9359 2.06437 9.67973 1.93003 8.44523 2.09545C7.21073 2.26088 6.03423 2.72119 5.01525 3.43747C3.99628 4.15374 3.16481 5.1049 2.59118 6.21048C2.01755 7.31606 1.71864 8.54353 1.71973 9.78907C1.72015 11.5997 2.35821 13.3524 3.52196 14.7395L3.51087 14.7489C3.54968 14.7955 3.59403 14.8354 3.63394 14.8814C3.68383 14.9385 3.73761 14.9923 3.78916 15.0477C3.94438 15.2163 4.10404 15.3781 4.27146 15.53C4.32246 15.5766 4.37512 15.6198 4.42668 15.6642C4.60407 15.8172 4.78646 15.9624 4.9755 16.0977C4.99989 16.1143 5.02206 16.136 5.04646 16.1531V16.1465C6.34483 17.0602 7.89372 17.5505 9.48135 17.5505C11.069 17.5505 12.6179 17.0602 13.9162 16.1465V16.1531C13.9406 16.136 13.9623 16.1143 13.9872 16.0977C14.1757 15.9619 14.3586 15.8172 14.536 15.6642C14.5876 15.6198 14.6402 15.576 14.6912 15.53C14.8587 15.3776 15.0183 15.2163 15.1735 15.0477C15.2251 14.9923 15.2783 14.9385 15.3288 14.8814C15.3681 14.8354 15.413 14.7955 15.4518 14.7484L15.4396 14.7395ZM9.4808 5.35417C9.97419 5.35417 10.4565 5.50048 10.8667 5.77459C11.277 6.0487 11.5967 6.43831 11.7855 6.89415C11.9743 7.34998 12.0237 7.85157 11.9275 8.33548C11.8312 8.81939 11.5936 9.26389 11.2448 9.61277C10.8959 9.96165 10.4514 10.1992 9.96747 10.2955C9.48356 10.3918 8.98198 10.3423 8.52614 10.1535C8.07031 9.96472 7.6807 9.64498 7.40659 9.23474C7.13248 8.8245 6.98617 8.34219 6.98617 7.8488C6.98617 7.18718 7.24899 6.55266 7.71683 6.08483C8.18466 5.617 8.81918 5.35417 9.4808 5.35417ZM5.04978 14.7395C5.0594 14.0116 5.35521 13.3168 5.87321 12.8053C6.39121 12.2938 7.08975 12.0069 7.81771 12.0065H11.1439C11.8718 12.0069 12.5704 12.2938 13.0884 12.8053C13.6064 13.3168 13.9022 14.0116 13.9118 14.7395C12.696 15.8351 11.1174 16.4415 9.4808 16.4415C7.84418 16.4415 6.26559 15.8351 5.04978 14.7395Z" fill="#0B4654" fill-opacity="0.5" />
                </svg>
                <input type="number" className='w-100'  placeholder="Pan card Number"  value={PanCardNumber} onChange={(e) => setPanCardNumber(e.target.value)} />
                </div>
                <div className="inputBox">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9159 6.83549H15.3942C15.5902 6.83549 15.7782 6.91337 15.9168 7.05198C16.0554 7.1906 16.1333 7.37861 16.1333 7.57464V16.4444C16.1333 16.6405 16.0554 16.8285 15.9168 16.9671C15.7782 17.1057 15.5902 17.1836 15.3942 17.1836H3.56776C3.37173 17.1836 3.18372 17.1057 3.04511 16.9671C2.90649 16.8285 2.82861 16.6405 2.82861 16.4444V7.57464C2.82861 7.37861 2.90649 7.1906 3.04511 7.05198C3.18372 6.91337 3.37173 6.83549 3.56776 6.83549H5.04606V6.09634C5.04606 4.92013 5.51331 3.7921 6.34501 2.9604C7.17672 2.12869 8.30475 1.66145 9.48096 1.66145C10.6572 1.66145 11.7852 2.12869 12.6169 2.9604C13.4486 3.7921 13.9159 4.92013 13.9159 6.09634V6.83549ZM12.4376 6.83549V6.09634C12.4376 5.3122 12.1261 4.56018 11.5716 4.00571C11.0171 3.45124 10.2651 3.13974 9.48096 3.13974C8.69682 3.13974 7.9448 3.45124 7.39033 4.00571C6.83586 4.56018 6.52436 5.3122 6.52436 6.09634V6.83549H12.4376ZM8.74181 11.2704V12.7487H10.2201V11.2704H8.74181ZM5.78521 11.2704V12.7487H7.26351V11.2704H5.78521ZM11.6984 11.2704V12.7487H13.1767V11.2704H11.6984Z" fill="#0B4654" fill-opacity="0.5" />
                </svg>
                <input type="text" className='w-100'   placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="inputBox">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9159 6.83549H15.3942C15.5902 6.83549 15.7782 6.91337 15.9168 7.05198C16.0554 7.1906 16.1333 7.37861 16.1333 7.57464V16.4444C16.1333 16.6405 16.0554 16.8285 15.9168 16.9671C15.7782 17.1057 15.5902 17.1836 15.3942 17.1836H3.56776C3.37173 17.1836 3.18372 17.1057 3.04511 16.9671C2.90649 16.8285 2.82861 16.6405 2.82861 16.4444V7.57464C2.82861 7.37861 2.90649 7.1906 3.04511 7.05198C3.18372 6.91337 3.37173 6.83549 3.56776 6.83549H5.04606V6.09634C5.04606 4.92013 5.51331 3.7921 6.34501 2.9604C7.17672 2.12869 8.30475 1.66145 9.48096 1.66145C10.6572 1.66145 11.7852 2.12869 12.6169 2.9604C13.4486 3.7921 13.9159 4.92013 13.9159 6.09634V6.83549ZM12.4376 6.83549V6.09634C12.4376 5.3122 12.1261 4.56018 11.5716 4.00571C11.0171 3.45124 10.2651 3.13974 9.48096 3.13974C8.69682 3.13974 7.9448 3.45124 7.39033 4.00571C6.83586 4.56018 6.52436 5.3122 6.52436 6.09634V6.83549H12.4376ZM8.74181 11.2704V12.7487H10.2201V11.2704H8.74181ZM5.78521 11.2704V12.7487H7.26351V11.2704H5.78521ZM11.6984 11.2704V12.7487H13.1767V11.2704H11.6984Z" fill="#0B4654" fill-opacity="0.5" />
                </svg>
                <input type="number" className='w-100'   placeholder="PhoneNumber" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="agreeCheckbox">
                <input type="checkbox" />
                <p>I agree with <a>Terms</a> and <a>Privacy</a></p>
                </div>
                <div className="buttonContainer">
                <button type="submit" className="signUpButton button" >
                    SIGN UP
                </button>
        
                </div>
             <p>Already have an account? <a href="/login">Log In</a></p>
             </form>
           </div>
         </div>
       </div>
    );
}

export default SignupForm;
