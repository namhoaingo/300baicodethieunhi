package org.agoncal.application.invoice.util;

import javax.inject.Qualifier;
import java.lang.annotation.*;

/**
 * @author Antonio Goncalves
 *         http://www.antoniogoncalves.org
 *         --
 */

@Qualifier
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.FIELD, ElementType.PARAMETER,
        ElementType.TYPE})
@Documented
public @interface Vat {
}