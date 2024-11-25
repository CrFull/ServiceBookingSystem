package com.CrFull.ServiceBookingSystem.services.authentication;

import com.CrFull.ServiceBookingSystem.dto.SignupRequestDTO;
import com.CrFull.ServiceBookingSystem.dto.UserDto;
import com.CrFull.ServiceBookingSystem.entity.User;
import com.CrFull.ServiceBookingSystem.enums.UserRole;
import com.CrFull.ServiceBookingSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    public UserDto signupClient(SignupRequestDTO signupRequestDTO){
        User user = new User();
        user.setEmail(signupRequestDTO.getEmail());
        user.setPassword(signupRequestDTO.getPassword());
        user.setName(signupRequestDTO.getName());
        user.setLastname(signupRequestDTO.getLastname());
        user.setPhone(signupRequestDTO.getPhone());
        user.setRole(UserRole.CLIENT);

        return userRepository.save(user).getDto();
    }

}
