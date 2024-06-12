function solution(new_id) {
    var answer = '';
    // 대문자 -> 소문자
    let lower = new_id.toLowerCase();
    // 소문자, 숫자, -, _, . 제외한 모든 문자 제거
    let level2 = lower.replace(/[^\w-_.]/g, "");
    let level3 = level2.replace(/\.+/g, '.');
    let level4 = level3.replace(/^\.|\.$/g, '');
    let level5 = level4.length === 0 ? 'a':level4;
    if (level5.length >= 16) {
        level5 = level5.slice(0,15).replace(/\.$/g,'')
    }
    if (level5.length <= 2) {
        const last = level5[level5.length - 1].repeat(3-level5.length)
        level5 += last
    }
    return level5;
}