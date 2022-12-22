package com.example.producerconsumercdi;

import com.example.javaeewebapp.INumberGenerator;
import jakarta.annotation.ManagedBean;

@ManagedBean
@ThirteenDigitQualifier
public class ThirteenDigitGenerator implements INumberGenerator {
    @Override
    public int GenerateNumber() {
        return 13;
    }
}
