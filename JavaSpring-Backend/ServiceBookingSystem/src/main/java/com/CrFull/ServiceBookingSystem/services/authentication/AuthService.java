package com.CrFull.ServiceBookingSystem.services.authentication;

import com.CrFull.ServiceBookingSystem.dto.SignupRequestDTO;
import com.CrFull.ServiceBookingSystem.dto.UserDto;

public interface AuthService {
    public UserDto signupClient(SignupRequestDTO signupRequestDTO);
    Boolean presentByEmail(String email);
    UserDto signupCompany(SignupRequestDTO signupRequestDTO);
}
