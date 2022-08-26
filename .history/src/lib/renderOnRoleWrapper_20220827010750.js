import React from 'react'

const RenderOnRoleWrapper = ({ roles, children }) => {

    const hasRole = (roles) => {
        return roles
    }

    if (!hasRole(roles)) {
        return null;
    }
    return children
}

export default RenderOnRoleWrapper