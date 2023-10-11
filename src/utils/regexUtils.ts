import React from 'react';

export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validateNumeric(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.value = event.target.value.replace(/[^-0-9]/g, '').slice(0, 6);
}
