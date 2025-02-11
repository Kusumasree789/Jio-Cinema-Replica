import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.section}>
                <h3 className={styles.heading}>JioCinema</h3>
                <ul className={styles.list}>
                    <li>For You</li>
                    <li>Sports</li>
                    <li>Movies</li>
                    <li>TV Shows</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h3 className={styles.heading}>Support</h3>
                <ul className={styles.list}>
                    <li>Help Center</li>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                    <li>Content Complaints</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h3 className={styles.heading}>Connect With Us</h3>
                <ul className={styles.list}>
                    <li>Facebook</li>
                    <li>X</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h3 className={styles.heading}>Download the App</h3>
                <ul className={styles.list}>
                    <li>Google Play</li>
                    <li>App Store</li>
                </ul>
            </div>
            <div className={styles.copyright}>
                <p>Copyright © Star India Private Limited, 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}