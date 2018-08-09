
from celery import Celery

BROKER_URL = 'redis://localhost:6379/0'
CELERY_RESULT_BACKEND = 'redis://localhost:6379/0'

app = Celery('task', broker=BROKER_URL, backend=CELERY_RESULT_BACKEND)

@app.task 
def prime_number(n):
    prime_count = 0
    for num1 in range(1, n+1):
        is_prime = True
        for num2 in range(2, num1):
            if num1 % num2 == 0:
                is_prime = False
        if is_prime:
            prime_count += 1
    return prime_count