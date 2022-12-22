package com.example.producerconsumercdi;

import com.example.javaeewebapp.INumberGenerator;
import jakarta.annotation.ManagedBean;

@ManagedBean
@FourteenDigitQualifier
public class FourteenDigitGenerator implements INumberGenerator {

    @Override
    public int GenerateNumber() {
        return 14;
    }
}
