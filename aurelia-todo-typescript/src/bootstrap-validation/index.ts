/**
 * Created by malcolmj on 6/28/2016.
 */
/**
 * Created by malcolmj on 6/23/2016.
 */
import {BootstrapFormValidationRenderer} from './bootstrap-form-validation-renderer';

export function configure(config) {
    config.container.registerHandler(
        'bootstrap-form',
        container => container.get(BootstrapFormValidationRenderer));
}
