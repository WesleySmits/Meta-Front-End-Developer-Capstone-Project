import React, { useState } from 'react';
import styles from './ReservationForm.module.css';
import Button from './base/button/Button';
import { useTranslations } from '../translations/TranslationContext';
import { ButtonVariant } from './base/button/Button.types';

const ReservationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        diners: 1,
        name: '',
        email: '',
        phone: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const translations = useTranslations();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Make sure all data is filled in despite native HTML required attribute
        if (!formData.date || !formData.time || !formData.name || !formData.email || !formData.phone) {
            setError(translations.allFieldsRequired);
            return;
        }

        setError(null);
        setSuccess(true);

        // Simulate sending data to a server
        setTimeout(() => {
            console.log('Reservation Data:', formData);
            setSuccess(false);
        }, 2000);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>{translations.reserveATable}</h2>

            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{translations.reservationSuccess}</p>}

            <label>
                {translations.date}
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </label>

            <label>
                {translations.time}
                <select name="time" value={formData.time} onChange={handleChange}>
                    <option value="">{translations.selectATime}</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                </select>
            </label>

            <label>
                {translations.numberOfPeople}
                <input type="number" name="diners" min="1" value={formData.diners} onChange={handleChange} />
            </label>

            <label>
                {translations.name}
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>

            <label>
                {translations.email}
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>

            <label>
                {translations.phone}
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>

            <Button
                type="submit"
                variant={ButtonVariant.Secondary}
                label={translations.reserveATable}
                onClick={() => {}}
            />
        </form>
    );
};

export default ReservationForm;
