import bisect
def grade(score):
    print("FDCBA"[bisect.bisect([60, 70, 80, 90], score)])
