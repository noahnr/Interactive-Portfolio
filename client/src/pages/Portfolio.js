import React from "react";


function Portfolio(){

    return (
        <>
        <div class="hero"></div>
        <div class="content">
            <div class="brick-breaker">
                <a href="https://poki.com/en/g/brick-breaker" alt="example">
                    <img src="assets/images/weather.JPG"
                        class="float-left" alt="example" />
                </a>
                <h3>My favorite projects of the year!</h3>
                <p>
                    <div class={{float: 'right'}}>
                    <h3 style={{color: 'darkgrey'}}>Weather API</h3> 
                    <a href="https://noahnr.github.io/Weather-api-homework/" target="_blank" rel="noopener noreferrer" class="links">Click here to see the deployed application for my Weather API!</a> <br />
                    <a href="https://github.com/noahnr/Weather-api-homework" target="_blank" rel="noopener noreferrer" class="links">Click here to see the hard code that runs my Weather API!</a>  
    
    
                    <h3 style={{color: 'darkgrey'}}>Travel Project</h3>
                    <a href="https://rgauna.github.io/testProject/" target="_blank" rel="noopener noreferrer" class="links">Click here to see the deployed application for my Weather API!</a> <br />
                    <a href="https://github.com/rgauna/testProject" target="_blank" rel="noopener noreferrer" class="links">Click here to see the hard code that runs my Weather API!</a>
                    </div>
    
                </p>
            </div>
            </div>
            <div id="online-reputation-management" class="online-reputation-management">
                <a href="spotify:playlist:7hK487TMahiIx4oN9ZXsvi">
                    <img src="https://www.samma3a.com/tech/en/wp-content/uploads/sites/2/2018/07/spotify-cover-1.jpg"
                        class="float-right" alt="example" />
                </a>
                <h2>My Favorite Playlist</h2>
                <p>
                    Click the image for my best of me music! Be ready for a diverse alternative universe! Time to catch a
                    vibe.
                </p>
            </div>


            <div id="social-media-marketing" class="social-media-marketing">
                <a href="https://www.firstinspires.org/robotics/ftc">
                    <img src="https://news.psu.edu/sites/default/files/styles/threshold-992/public/FTC%202016.jpg?itok=T48IVmyn"
                        class="float-left" alt="example" />
                </a>
                <h2>First Tech Challenge</h2>
                <p>
                    Click the image to follow the begining of my life in tech as a robot programmer and designer!
                    FTC is a competition for young minds to be introduced into the STEM world, and to inspire growing minds!
                    My high school started us with FTC as we transitioned into a tech based campus.
                </p>
            </div>

            <div class="benefits">
            <div class="benefit-lead">
                <a href="https://www.khanacademy.org/profile/kaid_723916734599874303098716/courses" style={{color: 'black'}}>
                    <h3>
                        <strong>Khan Academy</strong>
                    </h3>
                </a>
                <img src="./assets/images/lead-generation.png" alt="example" />
                <p>
                    Click the title above to follow to Khan academy! Throughout life I have used several sources to learn
                    outside of school due to being dyslexic.
                    Khan academy helped me learn math, science, history, coding, and even english!
                </p>
            </div>
            <div class="benefit-brand">
                <a href="https://www.codecademy.com/" style={{color: 'black'}}>
                    <h3><strong>Code Academy</strong></h3>
                </a>
                <img src="./assets/images/brand-awareness.png" alt="exampkle" />
                <p>
                    Click the title to follow to code achademy! This has been a useful site for all beginners for coding
                    that I have ever met including my robotics students!
                </p>
            </div>
            <div class="benefit-cost">
                <a href="https://www.w3schools.com/" style={{color: 'black'}}>
                    <h3><strong>W3 School</strong></h3>
                </a>
                <img src="./assets/images/cost-management.png" alt="example"/>
                <p>
                    Click the title to follow to w3 schools! W3 school has always been my go-to for any code I am stuck on!
                </p>
            </div>
        </div>
        <div class="footer">
            <h2>Website created by: Noah Soukup</h2>
        </div>
            </>
                );
            }
            
            export default Portfolio;