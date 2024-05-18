package ru.virbusutints.conque.entity;

import java.util.Locale;

public enum UserRole {

    STUDENT, TEACHER, UNKNOWN;

    public static UserRole of(String role) {
        for (UserRole userRole : UserRole.values()) {
            if (userRole.name().equals(role.toUpperCase(Locale.ROOT))) {
                return userRole;
            }
        }
        return UserRole.UNKNOWN;
    }
}
