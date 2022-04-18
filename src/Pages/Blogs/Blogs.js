import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className='container'>
            <div className='blogs-container'>
                <article className='article'>
                    <h3 className='blog-title mb-5'>Difference between authorization and authentication</h3>
                    <p className='mb-5'><b>Authentication</b> verifies the Users. Passwords, one-time pins, biometric information, and other information provided or entered by the user are used for authentication. The first step in a successful identity and access management strategy is authentication.</p>
                    <p>On the other hand, What resources a user has access to is determined by <b>authorization</b>. Authorization is controlled by the organization's settings, which it implements and maintains. The user has no visibility into or control over authorization.</p>
                </article>
                <article className='article'>
                    <h3 className='blog-title mb-4'>Purpose of using Firebase</h3>
                    <p>I am using <b>firebase</b> to set authentication on my website. It helps me to make authentication with great security. It minimizes the extra efforts to manage authentication. besides this I can hosting my site here easily specially my single page application site.</p>
                    <h3 className='blog-title my-4'>Other options to implement authentication</h3>
                    <ol>
                        <li>Okta</li>
                        <li>SecureAuth</li>
                        <li>Auth0</li>
                        <li>OneLogin</li>
                        <li>JumpCloud</li>
                    </ol>
                </article>
                <article className='article'>
                    <h3 className='blog-title mb-4'>Other services of Firebase without authentication</h3>
                    <p>Firebase offers a number of services other than authentication. These are -</p>
                    <ul>
                        <li><b>Analytics-</b> Google Analytics for Firebase users is free.</li>
                        <li><b>Cloud messaging-</b> Companies reliably receive and deliver messages by cloud messaging without any cost.</li>
                        <li><b>Realtime database-</b> Database that enables data to be stored and synced between users in real time.</li>
                        <li><b>Crashlytics-</b> Firebase Crashlytics is a real-time crash reporter that helps developers to enhance good quality of their apps.
                        </li>
                        <li><b>Performance-</b> Firebase Performance Monitoring performance of developer's apps.</li>
                        <li><b>Test lab-</b> Firebase Test Lab is a cloud-based app-testing infrastructure.</li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Blogs;