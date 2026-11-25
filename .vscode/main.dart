import 'dart:async';

void main() {
  runZonedGuarded(
    () {
      // Your application code here
    },
    (error, stackTrace) {
      // Handle uncaught errors here
      print('Uncaught error: $error');
      print('Stack trace: $stackTrace');
    },
  );
}
