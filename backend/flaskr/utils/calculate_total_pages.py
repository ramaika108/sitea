from math import ceil

def calculate_total_pages(sql_object, objects_per_page, page):
    count = sql_object.count()
    total_pages = ceil(count/objects_per_page)
    if page > total_pages:
        page = total_pages
        print('overload of pagination! Page is equal to: ', page)
    elif page <= 0:
        page = 1
    page -= 1
    return (total_pages, page)
