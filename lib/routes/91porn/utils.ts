import { config } from '@/config';
import ConfigNotFoundError from '@/errors/types/config-not-found';
const allowDomain = new Set(['91porn.com', 'www.91porn.com', '0122.91p30.com', 'www.91zuixindizhi.com', 'w1218.91p46.com']);

const domainValidation = (domain) => {
    if (!config.feature.allow_user_supply_unsafe_domain && !allowDomain.has(domain)) {
        throw new ConfigNotFoundError(`This RSS is disabled unless 'ALLOW_USER_SUPPLY_UNSAFE_DOMAIN' is set to 'true'.`);
    }
};

export { domainValidation };
