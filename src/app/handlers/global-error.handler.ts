import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { ErrorService } from '../services/error-service';
import { LoggingService } from '../services/logging.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: HttpErrorResponse | Error) {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);

    let message = '';
    let stackTrace = '';
    if (error instanceof HttpErrorResponse) {
      ({ message, stackTrace } = this.handleServerError(
        message,
        errorService,
        error,
        stackTrace,
        notifier
      ));
    } else {
      ({ message, stackTrace } = this.handleClientError(
        message,
        errorService,
        error,
        stackTrace,
        notifier
      ));
    }
    logger.logError(message, stackTrace);
    console.error(error);
  }

  private handleServerError(
    message: string,
    errorService: ErrorService,
    error: HttpErrorResponse,
    stackTrace: string,
    notifier: NotificationService
  ) {
    message = errorService.getServerErrorMessage(error);
    stackTrace = errorService.getServerErrorStackTrace(error);
    notifier.showError(message);
    return { message, stackTrace };
  }

  private handleClientError(
    message: string,
    errorService: ErrorService,
    error: Error,
    stackTrace: string,
    notifier: NotificationService
  ) {
    message = errorService.getClientErrorMessage(error);
    stackTrace = errorService.getClientErrorStackTrace(error);
    notifier.showError(message);
    return { message, stackTrace };
  }
}
