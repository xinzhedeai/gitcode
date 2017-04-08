package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.ConcernInfo;
import po.ConcernInfoExample;

public interface ConcernInfoMapper {
    int countByExample(ConcernInfoExample example);

    int deleteByExample(ConcernInfoExample example);

    int deleteByPrimaryKey(String usId);

    int insert(ConcernInfo record);

    int insertSelective(ConcernInfo record);

    List<ConcernInfo> selectByExample(ConcernInfoExample example);

    ConcernInfo selectByPrimaryKey(String usId);

    int updateByExampleSelective(@Param("record") ConcernInfo record, @Param("example") ConcernInfoExample example);

    int updateByExample(@Param("record") ConcernInfo record, @Param("example") ConcernInfoExample example);

    int updateByPrimaryKeySelective(ConcernInfo record);

    int updateByPrimaryKey(ConcernInfo record);
}